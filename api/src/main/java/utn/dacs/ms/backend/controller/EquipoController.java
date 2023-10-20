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

import utn.dacs.ms.backend.dto.EquipoDTO;
import utn.dacs.ms.backend.exceptions.ResourceNotFoundException;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.service.EquipoService;

@RestController
@RequestMapping(value = "/equipo")
public class EquipoController {

    @Autowired
    private EquipoService equipoService;

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
}
