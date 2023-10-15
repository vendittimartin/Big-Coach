package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.model.repository.JugadorRepository;
import utn.dacs.ms.backend.service.JugadorService;

@Service
public class JugadorServiceImpl implements JugadorService {

    @Autowired
    private JugadorRepository jugadorRepository;

    @Override
    public Optional<Jugador> getById(Integer id) {
        return jugadorRepository.findById(id);
    }

    @Override
    public Optional<Jugador> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public Boolean existById(Long id) {
        return null;
    }

    @Override
    public List<Jugador> getAll() {
        return jugadorRepository.findAll();
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void delete(Integer id) {
        Optional<Jugador> jugador = getById(id);
        jugadorRepository.delete(jugador.get());
    }

    @Override
    public Jugador save(Jugador entity) {
        return jugadorRepository.save(entity);
    }

    @Override
    public List<Jugador> find(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Jugador getBy(Map<String, Object> filter) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Boolean existById(Integer id) {
        return jugadorRepository.existsById(id);
    }

}
