package utn.dacs.ms.conector.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PartidoDTO {
    @JsonAlias("id")
    private Long id;
    @JsonAlias("home_team")
    @JsonProperty("equipo1")
    private EquipoDTO equipo1;

    @JsonAlias("visitor_team")
    @JsonProperty("equipo2")
    private EquipoDTO equipo2;

    @JsonAlias("home_team_score")
    @JsonProperty("puntosEquipo1")
    private Long puntosEquipo1;

    @JsonAlias("visitor_team_score")
    @JsonProperty("puntosEquipo2")
    private Long puntosEquipo2;

}
