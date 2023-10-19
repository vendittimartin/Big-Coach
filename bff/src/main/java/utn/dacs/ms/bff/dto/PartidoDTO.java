package utn.dacs.ms.bff.dto;
import lombok.Data;

import java.util.Date;

@Data
public class PartidoDTO {

    private Integer id;
    private String equipo1;
    private String equipo2;
    private Date string;
    private Integer puntosEquipo1;
    private Date puntosEquipo2;

}
