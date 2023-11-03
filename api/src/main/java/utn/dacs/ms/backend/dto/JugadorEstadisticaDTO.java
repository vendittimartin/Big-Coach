package utn.dacs.ms.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class JugadorEstadisticaDTO {
    private Integer id;
    private String nombre;
    private String posicion;
    private String equipoNBA;
    private Long puntajeTotal;

    private List<EstadisticaHistoricaDTO> estadisticaHistorica;
}
