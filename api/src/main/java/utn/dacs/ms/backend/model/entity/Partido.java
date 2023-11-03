package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Partido {

    @Id
    private Integer id;
    private String equipo1;
    private String equipo2;
    private Integer puntosEquipo1;
    private Integer puntosEquipo2;
    @OneToMany(mappedBy = "partido")
    private List<EstadisticasPartido> estadisticasPartido;

}
