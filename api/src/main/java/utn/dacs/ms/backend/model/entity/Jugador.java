package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import lombok.Data;

import java.util.List;

@Data
@Entity
public class Jugador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idJugador;
    private String nombre;
    private String posicion;
    private String equipoNBA;

    @OneToMany(mappedBy = "jugador")
    private List<EstadisticaHistorica> estadisticaHistorica;
    @ManyToMany
    @JoinTable(
            name = "jugador_equipo",
            joinColumns = @JoinColumn(name = "idJugador"),
            inverseJoinColumns = @JoinColumn(name = "idEquipo"))
    private List<Equipo> equipos;

    @OneToMany(mappedBy = "jugador")
    private List<EstadisticasPartido> estadisticasPartido;

    public Object getPosicion() {
        return this.posicion;
    }

    public List<Equipo> getEquipos() {
        return this.equipos;
    }
}
