package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import utn.dacs.ms.backend.model.entity.Jugador;

import java.util.List;

@Repository
public interface JugadorRepository extends JpaRepository<Jugador, Integer>{

    @Query("SELECT j FROM Jugador j WHERE UPPER(TRIM(j.nombre)) LIKE %:nombre%")
    List<Jugador> buscarPorNombre(String nombre);
}

