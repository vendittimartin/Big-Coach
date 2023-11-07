package utn.dacs.ms.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import utn.dacs.ms.backend.dto.CoachDTO;
import utn.dacs.ms.backend.dto.CoachEquipoDTO;
import utn.dacs.ms.backend.exceptions.ResourceNotFoundException;
import utn.dacs.ms.backend.model.entity.Coach;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.service.CoachService;
import utn.dacs.ms.backend.service.EquipoService;

@RestController
@RequestMapping(value = "/coach")
public class CoachController {

    @Autowired
    private CoachService coachService;

    @Autowired
    private EquipoService equipoService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<CoachDTO>> getAll() {
        List<Coach> coachs = coachService.getAll();
        List<CoachDTO> data = coachs.stream().map(coach
                        -> modelMapper.map(coach, CoachDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<List<CoachDTO>>(data, HttpStatus.OK);
    }

    @GetMapping("/ranking")
    public ResponseEntity<List<CoachEquipoDTO>> getRanking() {
        List<CoachEquipoDTO> coachs = coachService.getRanking();
        return new ResponseEntity<List<CoachEquipoDTO>>(coachs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoachDTO> getById(@PathVariable(value = "id") String id) throws ResourceNotFoundException {
        Optional<Coach> coach = coachService.getById(id);

        if (coach.isEmpty()) {
            throw new ResourceNotFoundException("");
        }
        CoachDTO data = modelMapper.map(coach.get(), CoachDTO.class);
        return new ResponseEntity<CoachDTO>(data, HttpStatus.OK);
    }
    
    @PostMapping("")
    public ResponseEntity<?> createCoach(@RequestBody CoachDTO coachDTO) {
        Optional<Coach> existingCoach = coachService.getById(coachDTO.getEmail());
        if(existingCoach.isPresent()) {
            return new ResponseEntity<>("El usuario ya se encuentra registrado", HttpStatus.CONFLICT);
        } else {
            Coach coach = modelMapper.map(coachDTO, Coach.class);
            Coach newCoach = coachService.save(coach);
            Equipo equipo = new Equipo(newCoach);
            equipoService.save(equipo);
            CoachDTO createdCoachDTO = modelMapper.map(newCoach, CoachDTO.class);
            return new ResponseEntity<>(createdCoachDTO, HttpStatus.CREATED);
        }
    }
}
