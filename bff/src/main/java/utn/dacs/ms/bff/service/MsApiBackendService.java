package utn.dacs.ms.bff.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.api.client.MsApiBackendClient;
import utn.dacs.ms.bff.dto.*;
import utn.dacs.ms.bff.exceptions.BffException;
import utn.dacs.ms.bff.exceptions.ErrorEnum;

import java.util.List;

@Service
@Slf4j
public class MsApiBackendService {

    @Autowired
    private MsApiBackendClient msApiBackendClient;
    public List<JugadorDTO> jugador() {
        try {
            return this.msApiBackendClient.getAll();
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
    public List<JugadorEstadisticaDTO> getByNombre(String nombre) {
        try {
            return this.msApiBackendClient.getByNombre(nombre);
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public CoachDTO getCoachByID(String id) {
        try {
            return this.msApiBackendClient.getCoachByID(id);
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public List<CoachEquipoDTO> getRanking() {
        try {
            return this.msApiBackendClient.getRanking();
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public ResponseEntity<?> createCoach(CoachDTO coachDTO) {
        try {
            return this.msApiBackendClient.createCoach(coachDTO);
        } catch (Exception e) {
            log.error("Error producido al solicitar un recurso a /backend/coach", e);
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public List<EquipoDTO> getEquipoByCoach(String id) {
        try {
            return this.msApiBackendClient.getEquipoByCoach(id);
        } catch (Exception e) {
            log.error("Error producido al solicitar un recurso a /backend/equipo/id", e);
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public ResponseEntity<EquipoDTO> addJugadorAEquipo(Integer idEquipo, Integer idJugador){
            return this.msApiBackendClient.addJugador(idEquipo,idJugador);
    }
}
