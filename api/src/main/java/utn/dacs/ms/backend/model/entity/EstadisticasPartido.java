package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

@Data
@Entity
public class EstadisticasPartido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer puntajeTotal;
    private Integer asistencias;
    private Integer robos;
    private Integer tapas;
    private Integer rebotes;
    private Integer puntos;
    @ManyToOne
    private Jugador jugador;
    @ManyToOne
    private Partido partido;

}
