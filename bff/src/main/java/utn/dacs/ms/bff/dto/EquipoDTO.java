package utn.dacs.ms.bff.dto;
import java.util.List;
import lombok.Data;

@Data
public class EquipoDTO {
    private Integer idEquipo;
    private Integer temporada;
    private Integer puntajeTotal;
    private List<JugadorDTO> jugadores;
}
