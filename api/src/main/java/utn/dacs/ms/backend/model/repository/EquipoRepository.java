package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.entity.Jugador;

import java.util.List;

public interface EquipoRepository extends JpaRepository<Equipo,Integer> {
    @Query("SELECT c.equipos FROM Coach c WHERE c.email = :email")
    List<Equipo> getByCoachId(String email);
}
