package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.dacs.ms.backend.model.entity.EstadisticasPartido;

import java.util.List;

public interface EstadisticaPartidoRepository extends JpaRepository<EstadisticasPartido,Integer> {

}
