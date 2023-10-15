package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Partido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String equipo1;
    private String equipo2;
    private Date string;

    @OneToMany(mappedBy = "partido")
    private List<EstadisticasPartido> estadisticasPartido;

}
