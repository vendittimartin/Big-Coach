package utn.dacs.ms.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import utn.dacs.ms.backend.dto.JugadorDto;
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
    public ResponseEntity<List<JugadorDto>> getAll() {
        List<Jugador> jugadores = jugadorService.getAll();
        List<JugadorDto> data = jugadores.stream().map(jugador
                        -> modelMapper.map(jugador, JugadorDto.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<JugadorDto>>(data, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JugadorDto> getById(@PathVariable(value = "id") Integer id) throws ResourceNotFoundException {
        Optional<Jugador> jugador = jugadorService.getById(id);

        if (jugador.isEmpty()) {
            throw new ResourceNotFoundException("");
        }
        JugadorDto data = modelMapper.map(jugador.get(), JugadorDto.class);
        return new ResponseEntity<JugadorDto>(data, HttpStatus.OK);
    }
}
