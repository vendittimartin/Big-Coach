package utn.dacs.ms.backend.service;

import utn.dacs.ms.backend.model.entity.Jugador;

import java.util.Optional;
import java.util.List;

public interface JugadorService extends CommonService<Jugador>{

    Optional<Jugador> getById(Integer id);

    void delete(Integer id);

    Boolean existById(Integer id);

    List<Jugador> buscarPorNombre(String nombre);

}
