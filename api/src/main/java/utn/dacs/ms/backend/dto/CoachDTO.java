package utn.dacs.ms.backend.dto;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CoachDTO {

    private String email;
    private String nombre;
    private String club;
    private List<EquipoDTO> equipoDTO;
    public String getEmail() {
        return this.email;
    }
}
