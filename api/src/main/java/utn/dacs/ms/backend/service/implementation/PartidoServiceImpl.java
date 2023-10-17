package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.model.entity.Partido;
import utn.dacs.ms.backend.model.repository.PartidoRepository;
import utn.dacs.ms.backend.service.PartidoService;

@Service
public class PartidoServiceImpl implements PartidoService {

    @Autowired
    private PartidoRepository partidoRepository;

    @Override
    public Optional<Partido> getById(Integer id) {
        return partidoRepository.findById(id);
    }

    @Override
    public Optional<Partido> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public Boolean existById(Long id) {
        return null;
    }

    @Override
    public List<Partido> getAll() {
        return partidoRepository.findAll();
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void delete(Integer id) {
        Optional<Partido> partido = getById(id);
        partidoRepository.delete(partido.get());
    }

    @Override
    public Partido save(Partido entity) {
        return partidoRepository.save(entity);
    }

    @Override
    public List<Partido> find(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Partido getBy(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Boolean existById(Integer id) {
        return partidoRepository.existsById(id);
    }

}
