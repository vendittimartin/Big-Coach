package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

import java.util.ArrayList;
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

    public Equipo() {
    }
    public Equipo(Coach coach) {
        this.temporada = 2023;
        this.puntajeTotal = 0;
        this.coach = coach;
        this.jugadores = new ArrayList<>();
    }

    public List<Jugador> getJugadores() {
        return this.jugadores;
    }

}
