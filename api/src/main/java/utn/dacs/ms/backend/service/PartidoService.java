package utn.dacs.ms.backend.service;

import utn.dacs.ms.backend.model.entity.Partido;

import java.util.Optional;

public interface PartidoService extends CommonService<Partido>{
    Optional<Partido> getById(Integer id);

    void delete(Integer id);

    Boolean existById(Integer id);
}
