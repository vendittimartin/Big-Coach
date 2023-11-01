package utn.dacs.ms.bff.dto;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;


@Data
public class PartidoDTO {
    @JsonAlias ("id")
    private Integer id;
    @JsonAlias("equipo1")
    private EquipoNBADTO equipo1;
    @JsonAlias("equipo2")
    private EquipoNBADTO equipo2;
    @JsonAlias("puntosEquipo1")
    private Integer puntosEquipo1;
    @JsonAlias("puntosEquipo2")
    private Integer puntosEquipo2;

}
