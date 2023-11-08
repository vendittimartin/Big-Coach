package utn.dacs.ms.bff.dto;
import lombok.Data;

@Data
public class JugadorDTO {

    private Integer id;
    private String nombre;
    private String apellido;
    private String posicion;
    private String equipoNBA;
    private Long puntajeTotal;
}
