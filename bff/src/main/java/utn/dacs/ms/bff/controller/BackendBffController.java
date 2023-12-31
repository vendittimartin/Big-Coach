package utn.dacs.ms.bff.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.dto.*;
import utn.dacs.ms.bff.service.MsApiBackendService;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class BackendBffController {

    @Autowired
    private MsApiBackendService apiBackendService;

    //Mapping Jugador
    @GetMapping(value = "/jugador")
    public List<JugadorDTO> jugador() {
        return apiBackendService.jugador();
    }

    @GetMapping(value = "/jugador/{nombre}")
    public List<JugadorEstadisticaDTO> getByNombre(@PathVariable String nombre) {
        return apiBackendService.getByNombre(nombre);
    }

    //Mapping Coach
    @GetMapping(value = "/coach/{id}")
    public CoachDTO getCoachByID(@PathVariable(value = "id") String id) {
        return apiBackendService.getCoachByID(id);
    }

    @GetMapping(value = "/coach/ranking")
    public List<CoachEquipoDTO> getRanking() {
        return apiBackendService.getRanking();
    }
    @PostMapping(value = "/coach")
    public ResponseEntity<?> createCoach(@RequestBody CoachDTO coachDTO) {
        return apiBackendService.createCoach(coachDTO);
    }

    //Mapping Equipo
    @GetMapping(value = "/equipo/{id}")
    public List<EquipoDTO> getEquipoByCoach(@PathVariable(value = "id") String id) {
        return apiBackendService.getEquipoByCoach(id);
    }

    @GetMapping(value = "equipo/{idEquipo}/agregarJugador/{idJugador}")
    public ResponseEntity<EquipoDTO> addJugadorAEquipo(@PathVariable("idEquipo") Integer idEquipo, @PathVariable("idJugador") Integer idJugador) {
        return apiBackendService.addJugadorAEquipo(idEquipo, idJugador);
    }
}
