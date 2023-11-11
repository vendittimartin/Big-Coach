package utn.dacs.ms.bff.dto;
import lombok.Data;

@Data
public class CoachEquipoDTO {
    private String email;
    private String nombre;
    private String club;
    private Integer puntajeTotal;
    private Integer posicion;
}