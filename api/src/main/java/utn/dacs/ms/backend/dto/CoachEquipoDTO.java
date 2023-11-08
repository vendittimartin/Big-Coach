package utn.dacs.ms.backend.dto;

import lombok.Data;

@Data
public class CoachEquipoDTO {
    private String email;
    private String nombre;
    private String club;
    private Integer puntajeTotal;
}
