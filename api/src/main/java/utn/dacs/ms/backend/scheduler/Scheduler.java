package utn.dacs.ms.backend.scheduler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import utn.dacs.ms.backend.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.backend.dto.JugadorControllerDTO;
import utn.dacs.ms.backend.dto.JugadorDTO;
import utn.dacs.ms.backend.dto.PartidoDTO;
import utn.dacs.ms.backend.model.entity.EstadisticasPartido;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.model.entity.Partido;
import utn.dacs.ms.backend.service.EquipoService;
import utn.dacs.ms.backend.service.EstadisticaPartidoService;
import utn.dacs.ms.backend.service.JugadorService;
import utn.dacs.ms.backend.service.PartidoService;

import java.util.List;
import java.util.Optional;

@Component @EnableScheduling
public class Scheduler {

    @Value("${dacs.conectorBDL.url}")
    private String url;
    @Autowired
    private JugadorService jugadorService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private EstadisticaPartidoService estadisticaPartidoService;
    @Autowired
    private PartidoService partidoService;
    @Autowired
    private EquipoService equipoService;

    @Scheduled(cron = "0 0 8 * * ?") //tiempo en S M H D M A --> 0 seg 0 min 8hs todos los días del mes de cada año
    public void task(){
        List<Long> gamesID = getGamesID();
        if(!gamesID.isEmpty()){
            for (Long aLong : gamesID) {
                List<EstadisticaPartidoDTO> estadisticaPartidoDTOS = getStatsByGameID(aLong);
                if(!estadisticaPartidoDTOS.isEmpty()){
                    for (EstadisticaPartidoDTO estadisticaPartidoDTO : estadisticaPartidoDTOS) {
                        JugadorControllerDTO jugadorDTO = estadisticaPartidoDTO.getJugadorDTO();
                        String nombreCompleto = jugadorDTO.getNombre() + " " + jugadorDTO.getApellido();
                        JugadorDTO jugador = jugadorService.buscarPorNombreCompleto(nombreCompleto);
                        if (jugador != null){
                            Jugador pJugador = modelMapper.map(jugador, Jugador.class);
                            Optional<Partido> oPartido = partidoService.getById(aLong);
                            if(oPartido.isPresent()){
                                Partido partido = oPartido.get();
                                setPointsToPlayers(estadisticaPartidoDTO, pJugador, partido);
                            } else {
                                PartidoDTO partidoDTO = getGameId(aLong);
                                Partido partido = modelMapper.map(partidoDTO, Partido.class);
                                partido.setId(partidoDTO.getId());
                                partido.setEquipo1(partidoDTO.getEquipo1().getNombre());
                                partido.setEquipo2(partidoDTO.getEquipo2().getNombre());
                                partidoService.save(partido);
                                setPointsToPlayers(estadisticaPartidoDTO, pJugador, partido);
                            }
                        }
                    }
                }
            }
        }
    }

    private void setPointsToPlayers(EstadisticaPartidoDTO estadisticaPartidoDTO, Jugador jugador, Partido partido){
        EstadisticasPartido estadisticasPartido = new EstadisticasPartido();

        estadisticasPartido.setAsistencias(estadisticaPartidoDTO.getAsistencias());
        estadisticasPartido.setRobos(estadisticaPartidoDTO.getRobos());
        estadisticasPartido.setBloqueos(estadisticaPartidoDTO.getBloqueos());
        estadisticasPartido.setRebotes(estadisticaPartidoDTO.getRebotes());
        estadisticasPartido.setPuntos(estadisticaPartidoDTO.getPuntos());
        estadisticasPartido.setPuntajeTotal();

        estadisticasPartido.setJugador(jugador);
        estadisticasPartido.setPartido(partido);

        estadisticaPartidoService.save(estadisticasPartido);
    }

    private List<Long> getGamesID(){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<Long>> response =
                restTemplate.exchange(url+"/getGamesIDByDateYesterday",
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<Long>>() {});
        return response.getBody();
    }

    private List<EstadisticaPartidoDTO> getStatsByGameID(Long id){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<EstadisticaPartidoDTO>> response =
                restTemplate.exchange(url+"/getStatsByGame/"+id,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<EstadisticaPartidoDTO>>() {});
        return response.getBody();
    }

    private PartidoDTO getGameId(Long id){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<PartidoDTO> response =
                restTemplate.exchange(url+"/getGameById/"+id,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<PartidoDTO>() {});
        return response.getBody();
    }
}
