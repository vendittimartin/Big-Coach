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

import utn.dacs.ms.backend.dto.PartidoDTO;
import utn.dacs.ms.backend.exceptions.ResourceNotFoundException;
import utn.dacs.ms.backend.model.entity.Partido;
import utn.dacs.ms.backend.service.PartidoService;

@RestController
@RequestMapping(value = "/partido")
public class PartidoController {

    @Autowired
    private PartidoService partidoService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<PartidoDTO>> getAll() {
        List<Partido> partidos = partidoService.getAll();
        List<PartidoDTO> data = partidos.stream().map(partido
                        -> modelMapper.map(partido, PartidoDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<PartidoDTO>>(data, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PartidoDTO> getById(@PathVariable(value = "id") Integer id) throws ResourceNotFoundException {
        Optional<Partido> partido = partidoService.getById(id);

        if (partido.isEmpty()) {
            throw new ResourceNotFoundException("");
        }
        PartidoDTO data = modelMapper.map(partido.get(), PartidoDTO.class);
        return new ResponseEntity<PartidoDTO>(data, HttpStatus.OK);
    }
}
