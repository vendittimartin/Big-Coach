package utn.dacs.ms.conector.dto;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.util.List;

@Data
public class RespuestaDTO<T> {
    @JsonAlias("data")
    private List<T> data;
}
