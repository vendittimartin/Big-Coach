package utn.dacs.ms.backend.model.entity;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
@Entity
public class EstadisticasPartido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long puntajeTotal;
    private Long asistencias;
    private Long robos;
    private Long bloqueos;
    private Long rebotes;
    private Long puntos;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idJugador")
    private Jugador jugador;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partido_id")
    private Partido partido;

    public void setPuntajeTotal() {
        this.puntajeTotal = (long) Math.ceil(puntos+rebotes*1.2+asistencias*1.5+robos*3+bloqueos*3);
    }
}
