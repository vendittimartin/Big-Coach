package utn.dacs.ms.conector.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class EquipoDTO {

    @JsonAlias("id")
    private Long id;

    @JsonAlias("abbreviation")
    @JsonProperty("nombre")
    private String nombre;
}

