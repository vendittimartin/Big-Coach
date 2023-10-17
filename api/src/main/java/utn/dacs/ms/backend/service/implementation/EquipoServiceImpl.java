package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.repository.EquipoRepository;
import utn.dacs.ms.backend.service.EquipoService;

@Service
public class EquipoServiceImpl implements EquipoService {

    @Autowired
    private EquipoRepository equipoRepository;

    @Override
    public Optional<Equipo> getById(Integer id) {
        return equipoRepository.findById(id);
    }
    @Override
    public List<Equipo> getAll() {
        return equipoRepository.findAll();
    }

    @Override
    public void delete(Integer id) {
        Optional<Equipo> equipo = getById(id);
        equipoRepository.delete(equipo.get());
    }
    @Override
    public Equipo save(Equipo entity) {
        return equipoRepository.save(entity);
    }

    @Override
    public Boolean existById(Integer id) {
        return equipoRepository.existsById(id);
    }

}
