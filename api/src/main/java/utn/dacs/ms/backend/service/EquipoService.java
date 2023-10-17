package utn.dacs.ms.backend.service;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.entity.Jugador;

import java.util.List;
import java.util.Optional;

public interface EquipoService {
    Optional<Equipo> getById(Integer id);

    List<Equipo> getAll();

    void delete(Integer id);

    Equipo save(Equipo entity);

    Boolean existById(Integer id);
}
