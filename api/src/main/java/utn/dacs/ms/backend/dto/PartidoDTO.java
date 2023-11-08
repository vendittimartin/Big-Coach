package utn.dacs.ms.backend.dto;
import lombok.Data;

import java.util.Date;

@Data
public class PartidoDTO {
    private Integer id;
    private EquipoApiDTO equipo1;
    private EquipoApiDTO equipo2;
    private Integer puntosEquipo1;
    private Integer puntosEquipo2;

}
