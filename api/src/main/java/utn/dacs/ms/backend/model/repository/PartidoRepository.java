package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import utn.dacs.ms.backend.model.entity.Partido;

@Repository
public interface PartidoRepository extends JpaRepository<Partido, Integer>{

}
