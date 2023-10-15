package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

import java.util.List;

@Data
@Entity
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEquipo;
    private Integer temporada;
    private Integer puntajeTotal;
    @ManyToOne
    @JoinColumn(name = "coach_id", referencedColumnName = "email")
    private Coach coach;
    @ManyToMany(mappedBy = "equipos")
    private List<Jugador> jugadores;
}
