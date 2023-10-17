package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
@Entity
public class EstadisticaHistorica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Float puntos;
    private Float minutos;
    private Float rebotes;
    private Float asistencias;
    private Float robos;
    private Float tapones;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "idJugador")
    private Jugador jugador;

}
