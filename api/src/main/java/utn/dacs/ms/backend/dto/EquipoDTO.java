package utn.dacs.ms.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class EquipoDTO {
    private Integer idEquipo;
    private Integer temporada;
    private Integer puntajeTotal;
    private List<JugadorDTO> jugadores;
}
