package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.backend.model.entity.EstadisticasPartido;
import utn.dacs.ms.backend.model.repository.EstadisticaPartidoRepository;
import utn.dacs.ms.backend.service.EstadisticaPartidoService;

@Service
public class EstadisticaPartidoImpl implements EstadisticaPartidoService {
    @Autowired
    private EstadisticaPartidoRepository estadisticaPartidoRepository;

    @Override
    public Optional<EstadisticasPartido> getById(Integer id) {
        return estadisticaPartidoRepository.findById(id);
    }
    @Override
    public List<EstadisticasPartido> getById(String id) {
        return null;
    }

    @Override
    public List<EstadisticasPartido> getAll() {
        return estadisticaPartidoRepository.findAll();
    }
    @Override
    public void delete(Integer id) {
        Optional<EstadisticasPartido> estadisticasPartido = getById(id);
        estadisticaPartidoRepository.delete(estadisticasPartido.get());
    }

    @Override
    public EstadisticasPartido save(EstadisticasPartido entity) {
        return estadisticaPartidoRepository.save(entity);
    }

    @Override
    public Boolean existById(Integer id) {
        return estadisticaPartidoRepository.existsById(id);
    }

}
