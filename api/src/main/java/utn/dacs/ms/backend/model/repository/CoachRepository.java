package utn.dacs.ms.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import utn.dacs.ms.backend.model.entity.Coach;

@Repository
public interface CoachRepository extends JpaRepository<Coach, String>{

}
