package utn.dacs.ms.backend.service;
import utn.dacs.ms.backend.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.backend.model.entity.EstadisticasPartido;

import java.util.List;
import java.util.Optional;

public interface EstadisticaPartidoService {
    List<EstadisticasPartido> getById(String id);

    List<EstadisticasPartido> getAll();

    void delete(Integer id);

    EstadisticasPartido save(EstadisticasPartido entity);
    Boolean existById(Integer id);
    Optional<EstadisticasPartido> getById(Integer id);

}
