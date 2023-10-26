package utn.dacs.ms.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import utn.dacs.ms.backend.dto.EquipoDTO;
import utn.dacs.ms.backend.dto.JugadorDTO;
import utn.dacs.ms.backend.dto.JugadorEstadisticaDTO;
import utn.dacs.ms.backend.exceptions.ResourceNotFoundException;
import utn.dacs.ms.backend.model.entity.Coach;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.service.EquipoService;
import utn.dacs.ms.backend.service.JugadorService;

@RestController
@RequestMapping(value = "/equipo")
public class EquipoController {

    @Autowired
    private EquipoService equipoService;

    @Autowired
    private JugadorService jugadorService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<EquipoDTO>> getAll() {
        List<Equipo> equipos = equipoService.getAll();
        List<EquipoDTO> data = equipos.stream().map(equipo
                        -> modelMapper.map(equipo, EquipoDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<EquipoDTO>>(data, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<EquipoDTO>> getById(@PathVariable(value = "id") String id){
        List<Equipo> equipos = equipoService.getByCoachId(id);
        List<EquipoDTO> data = equipos.stream().map(equipo
                        -> modelMapper.map(equipo, EquipoDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<EquipoDTO>>(data, HttpStatus.OK);
    }

    @GetMapping("{idEquipo}/agregarJugador/{idJugador}")
    public ResponseEntity<EquipoDTO> addJugador(@PathVariable Integer idEquipo, @PathVariable Integer idJugador) throws ResourceNotFoundException {
        Equipo equipoActualizado = equipoService.agregarJugadorAEquipo(idEquipo, idJugador);
        if (equipoActualizado != null) {
            EquipoDTO data = modelMapper.map(equipoActualizado, EquipoDTO.class);
            return new ResponseEntity<>(data, HttpStatus.OK);
        }
        else{
            throw new ResourceNotFoundException("");
        }
    }
}
