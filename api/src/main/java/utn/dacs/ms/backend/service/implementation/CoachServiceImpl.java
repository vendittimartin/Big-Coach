package utn.dacs.ms.backend.service.implementation;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.dto.CoachEquipoDTO;
import utn.dacs.ms.backend.model.entity.Coach;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.repository.CoachRepository;
import utn.dacs.ms.backend.service.CoachService;

@Service
public class CoachServiceImpl implements CoachService {

    @Autowired
    private CoachRepository coachRepository;

    @Override
    public Optional<Coach> getById(String id) {
        return coachRepository.findById(id);
    }

    @Override
    public Optional<Coach> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public Boolean existById(Long id) {
        return null;
    }

    @Override
    public List<Coach> getAll() {
        return coachRepository.findAll();
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void delete(String id) {
        Optional<Coach> coach = getById(id);
        coachRepository.delete(coach.get());
    }

    @Override
    public List<CoachEquipoDTO> getRanking(){
        List<Coach> coaches = coachRepository.findAll();
        List<CoachEquipoDTO> coachDTOs = new ArrayList<>();
        for (Coach coach : coaches) {
            CoachEquipoDTO CoachEquipoDTO = new CoachEquipoDTO();
            CoachEquipoDTO.setEmail(coach.getEmail());
            CoachEquipoDTO.setNombre(coach.getNombre());
            CoachEquipoDTO.setClub(coach.getClub());
            int totalPuntaje = coach.getEquipos().stream().mapToInt(Equipo::getPuntajeTotal).sum();
            CoachEquipoDTO.setPuntajeTotal(totalPuntaje);
            coachDTOs.add(CoachEquipoDTO);
        }
        coachDTOs.sort(Comparator.comparingInt(CoachEquipoDTO::getPuntajeTotal).reversed());
        return coachDTOs;
    }

    @Override
    public Coach save(Coach entity) {
        return coachRepository.save(entity);
    }

    @Override
    public List<Coach> find(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Coach getBy(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Boolean existById(String id) {
        return coachRepository.existsById(id);
    }

}
