package utn.dacs.ms.backend.service;

import org.springframework.http.ResponseEntity;
import utn.dacs.ms.backend.dto.CoachEquipoDTO;
import utn.dacs.ms.backend.model.entity.Coach;

import java.util.List;
import java.util.Optional;

public interface CoachService extends CommonService<Coach>{
    Optional<Coach> getById(String id);

    void delete(String id);

    Boolean existById(String id);

    List<CoachEquipoDTO> getRanking();
}
