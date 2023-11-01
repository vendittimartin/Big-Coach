package utn.dacs.ms.bff.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class EquipoNBADTO {
    @JsonAlias("id")
    private Long id;
    @JsonAlias("nombre")
    private String nombre;
}
