package utn.dacs.ms.backend.dto;
import lombok.Data;

import java.util.Date;

@Data
public class CoachDTO {

    private String email;
    private String nombre;
    private String club;

    public String getEmail() {
        return this.email;
    }
}
