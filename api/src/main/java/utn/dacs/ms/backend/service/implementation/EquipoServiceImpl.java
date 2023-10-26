package utn.dacs.ms.backend.service.implementation;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.dacs.ms.backend.model.entity.Equipo;
import utn.dacs.ms.backend.model.entity.Jugador;
import utn.dacs.ms.backend.model.repository.EquipoRepository;
import utn.dacs.ms.backend.service.EquipoService;
import utn.dacs.ms.backend.service.JugadorService;

@Service
public class EquipoServiceImpl implements EquipoService {

    @Autowired
    private EquipoRepository equipoRepository;
    @Autowired
    private JugadorService jugadorService;

    @Override
    public List<Equipo> getByCoachId(String id) {
        return equipoRepository.getByCoachId(id);
    }

    @Override
    public List<Equipo> getAll() {
        return equipoRepository.findAll();
    }

    @Override
    public void delete(Integer id) {
        Optional<Equipo> equipo = getById(id);
        equipoRepository.delete(equipo.get());
    }

    @Override
    public Optional<Equipo> getById(Integer id) {
        return equipoRepository.findById(id);
    }

    @Override
    public Equipo save(Equipo entity) {
        return equipoRepository.save(entity);
    }

    @Override
    public Boolean existById(Integer id) {
        return equipoRepository.existsById(id);
    }

    public Equipo agregarJugadorAEquipo(Integer idEquipo, Integer idJugador) {
        Optional<Equipo> optionalEquipo = getById(idEquipo);
        Equipo equipo = null;
        if (optionalEquipo.isPresent()) {
            equipo = optionalEquipo.get();
            List<Jugador> jugadores = equipo.getJugadores();

            Optional<Jugador> optionalJugador = jugadorService.getById(idJugador);
            if (optionalJugador.isPresent()) {
                Jugador jugador = optionalJugador.get();
                if (!jugadores.contains(jugador)) {
                    if (jugadores.stream().noneMatch(j -> j.getPosicion().equals(jugador.getPosicion()))) {
                        if (jugadores.stream().noneMatch(j -> j.getEquipoNBA().equals(jugador.getEquipoNBA()))) {
                            jugadores.add(jugador);
                            jugador.getEquipos().add(equipo);

                            save(equipo);
                            jugadorService.save(jugador);
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        }
        return equipo;
    }
}
