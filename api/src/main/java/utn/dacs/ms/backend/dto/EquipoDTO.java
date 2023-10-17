package utn.dacs.ms.backend.dto;

import lombok.Data;
import utn.dacs.ms.backend.model.entity.Coach;

@Data
public class EquipoDTO {
    private Integer idEquipo;
    private Integer temporada;
    private Integer puntajeTotal;

}
