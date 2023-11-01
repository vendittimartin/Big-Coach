package utn.dacs.ms.backend.service;

import utn.dacs.ms.backend.model.entity.Coach;
import java.util.Optional;

public interface CoachService extends CommonService<Coach>{
    Optional<Coach> getById(String id);

    void delete(String id);

    Boolean existById(String id);
}
