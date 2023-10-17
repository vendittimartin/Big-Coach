package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.dacs.ms.backend.model.entity.Equipo;

public interface EquipoRepository extends JpaRepository<Equipo,Integer> {
}
