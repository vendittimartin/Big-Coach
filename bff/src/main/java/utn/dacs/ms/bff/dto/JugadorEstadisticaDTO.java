package utn.dacs.ms.bff.dto;

import lombok.Data;
import utn.dacs.ms.bff.dto.EstadisticaHistoricaDTO;


import java.util.List;

@Data
public class JugadorEstadisticaDTO {
    private Integer id;
    private String nombre;
    private String posicion;
    private String equipoNBA;
    private List<EstadisticaHistoricaDTO> estadisticaHistorica;
}
