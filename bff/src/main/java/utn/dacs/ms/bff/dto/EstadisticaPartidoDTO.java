package utn.dacs.ms.bff.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class EstadisticaPartidoDTO {
    private Long asistencias;
    private Long robos;
    private Long rebotes;
    private Long puntos;
    private Long bloqueos;
    private JugadorDTO jugador;
    private PartidoDTO partido;

}
