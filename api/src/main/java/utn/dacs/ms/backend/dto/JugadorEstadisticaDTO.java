package utn.dacs.ms.backend.dto;

import lombok.Data;
import utn.dacs.ms.backend.model.entity.EstadisticaHistorica;

import java.util.List;

@Data
public class JugadorEstadisticaDTO {
    private Integer id;
    private String nombre;
    private String posicion;
    private String equipoNBA;
    private List<EstadisticaHistorica> estadisticaHistorica;
}
