package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.model.entity.Coach;
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
