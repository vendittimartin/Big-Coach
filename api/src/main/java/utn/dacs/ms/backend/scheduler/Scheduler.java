package utn.dacs.ms.backend.scheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import utn.dacs.ms.backend.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.backend.dto.JugadorControllerDTO;
import utn.dacs.ms.backend.model.entity.EstadisticasPartido;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.service.JugadorService;

import javax.transaction.Transactional;
import java.util.List;

@Component @EnableScheduling
public class Scheduler {

    @Autowired
    private JugadorService jugadorService;

    @Scheduled(cron = "* * * * * ?") //tiempo en S M H D M A --> 0 seg 0 min 8hs todos los días del mes de cada año
    public void task(){
        List<Long> gamesID = getGamesID();
        for (Long aLong : gamesID) {
            List<EstadisticaPartidoDTO> estadisticaPartidoDTOS = getStatsByGameID(aLong);
            for (EstadisticaPartidoDTO estadisticaPartidoDTO : estadisticaPartidoDTOS) {
                JugadorControllerDTO jugadorDTO = estadisticaPartidoDTO.getJugadorDTO();
                String nombreCompleto = jugadorDTO.getNombre() + " " + jugadorDTO.getApellido();
                List<Jugador> jugadores = jugadorService.buscarPorNombre(nombreCompleto);
                for(Jugador jugador : jugadores){
                    setPointsToPlayers(estadisticaPartidoDTO, jugador);
                    //traer partido (armar conectorBDL para traer un partido con id, equipo1,equipo2, pts1, pts2)
                    //estadisticasPartido.setPartido(partido);
                }
            }
        }
    }

    public void setPointsToPlayers(EstadisticaPartidoDTO estadisticaPartidoDTO, Jugador jugador){
        EstadisticasPartido estadisticasPartido = new EstadisticasPartido();
        Long asistencias = estadisticaPartidoDTO.getAsistencias();
        Long robos = estadisticaPartidoDTO.getRobos();
        Long bloqueos = estadisticaPartidoDTO.getBloqueos();
        Long rebotes = estadisticaPartidoDTO.getRebotes();
        Long puntos = estadisticaPartidoDTO.getPuntos();
        estadisticasPartido.setAsistencias(asistencias);
        estadisticasPartido.setRobos(robos);
        estadisticasPartido.setBloqueos(bloqueos);
        estadisticasPartido.setRebotes(rebotes);
        estadisticasPartido.setPuntos(puntos);
        //estadisticasPartido.setJugador(jugador);

        estadisticasPartido.setPuntajeTotal();

        System.out.println(estadisticasPartido);
    }

    public List<Long> getGamesID(){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<Long>> response =
                restTemplate.exchange("http://localhost:9001/bff/conectorBDL/getGamesIDByDateYesterday",
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<Long>>() {});
        return response.getBody();
    }

    public List<EstadisticaPartidoDTO> getStatsByGameID(Long id){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<EstadisticaPartidoDTO>> response =
                restTemplate.exchange("http://localhost:9001/bff/conectorBDL/getStatsByGame/"+id,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<EstadisticaPartidoDTO>>() {});
        return response.getBody();
    }

}
