package utn.dacs.ms.bff.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.dacs.ms.bff.dto.*;

import java.util.List;


@FeignClient(
        name = "msApiBackendClient",
        url = "${feign.client.config.msApiBackendClient.url}"
)

public interface MsApiBackendClient {

    @GetMapping("/jugador")
    List<JugadorDTO> getAll();

    @GetMapping("/jugador/nombre?={nombre}")
    List<JugadorEstadisticaDTO> getByNombre(@RequestParam String nombre);

    @GetMapping("/coach/{id}")
    CoachDTO getCoachByID(@RequestParam String id);

    @GetMapping("/coach/ranking")
    List<CoachEquipoDTO> getRanking();
    @PostMapping("/coach")
    ResponseEntity<?> createCoach(@RequestBody CoachDTO coachDTO);

    @GetMapping("/equipo/{id}")
    List<EquipoDTO> getEquipoByCoach(@RequestParam String id);

    @GetMapping("/equipo/{idEquipo}/agregarJugador/{idJugador}")
    ResponseEntity<EquipoDTO> addJugador(@RequestParam Integer idEquipo,@RequestParam Integer idJugador);
}
