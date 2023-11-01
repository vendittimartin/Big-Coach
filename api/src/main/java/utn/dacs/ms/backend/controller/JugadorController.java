package utn.dacs.ms.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import utn.dacs.ms.backend.dto.JugadorDTO;
import utn.dacs.ms.backend.dto.JugadorEstadisticaDTO;
import utn.dacs.ms.backend.exceptions.ResourceNotFoundException;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.service.JugadorService;

@RestController
@RequestMapping(value = "/jugador")
public class JugadorController {

    @Autowired
    private JugadorService jugadorService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<JugadorDTO>> getAll() {
        List<Jugador> jugadores = jugadorService.getAll();
        List<JugadorDTO> data = jugadores.stream().map(jugador
                        -> modelMapper.map(jugador, JugadorDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<JugadorDTO>>(data, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JugadorDTO> getById(@PathVariable(value = "id") Integer id) throws ResourceNotFoundException {
        Optional<Jugador> jugador = jugadorService.getById(id);

        if (jugador.isEmpty()) {
            throw new ResourceNotFoundException("");
        }
        JugadorDTO data = modelMapper.map(jugador.get(), JugadorDTO.class);
        return new ResponseEntity<JugadorDTO>(data, HttpStatus.OK);
    }

    @GetMapping("/nombre")
    public ResponseEntity<List<JugadorEstadisticaDTO>> getByNombre(@RequestParam String nombre){
        List<Jugador> jugadores = jugadorService.buscarPorNombre(nombre);
        List<JugadorEstadisticaDTO> data = jugadores.stream().map(jugador
                        -> modelMapper.map(jugador, JugadorEstadisticaDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<JugadorEstadisticaDTO>>(data, HttpStatus.OK);
    }
}
