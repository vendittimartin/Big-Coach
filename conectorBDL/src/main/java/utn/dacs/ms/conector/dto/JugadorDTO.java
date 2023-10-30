package utn.dacs.ms.conector.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class JugadorDTO {
    @JsonAlias("first_name")
    @JsonProperty("nombre")
    private String nombre;
    @JsonAlias("last_name")
    @JsonProperty("apellido")
    private String apellido;
    @JsonAlias("position")
    @JsonProperty("posicion")
    private String posicion;

}
