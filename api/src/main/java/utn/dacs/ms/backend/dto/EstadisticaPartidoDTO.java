package utn.dacs.ms.backend.dto;

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
    @JsonAlias("jugador")
    @JsonProperty("jugadorDTO")
    private JugadorControllerDTO jugadorDTO;
}
