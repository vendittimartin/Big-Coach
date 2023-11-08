package utn.dacs.ms.conector.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class EstadisticaDTO {
    @JsonAlias("ast")
    @JsonProperty("asistencias")
    private Long asistencias;

    @JsonAlias("blk")
    @JsonProperty("bloqueos")
    private Long bloqueos;
    @JsonAlias("reb")
    @JsonProperty("rebotes")
    private Long rebotes;
    @JsonAlias("pts")
    @JsonProperty("puntos")
    private Long puntos;

    @JsonAlias("stl")
    @JsonProperty("robos")
    private Long robos;
    @JsonAlias("player")
    @JsonProperty("jugador")
    private JugadorDTO jugador;

    @JsonAlias("game")
    @JsonProperty("partido")
    private PartidoDTO partido;
}
