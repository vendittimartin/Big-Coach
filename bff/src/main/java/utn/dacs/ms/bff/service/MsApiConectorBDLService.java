package utn.dacs.ms.bff.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.api.client.MsApiConectorBDLClient;
import utn.dacs.ms.bff.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.bff.dto.NoticiaDTO;
import utn.dacs.ms.bff.dto.PartidoDTO;
import utn.dacs.ms.bff.exceptions.BffException;
import utn.dacs.ms.bff.exceptions.ErrorEnum;

import java.util.List;

@Service
@Slf4j
public class MsApiConectorBDLService {

    @Autowired
    private MsApiConectorBDLClient msApiConectorBDLClient;

    public List<PartidoDTO> getGamesByDateNow() {
        try {
            return this.msApiConectorBDLClient.getGamesByDateNow();

        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public List<Long> getGamesIDByDateYesterday() {
        try {
            return this.msApiConectorBDLClient.getGamesIDByDateYesterday();

        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public List<EstadisticaPartidoDTO> getStatsByGame(Long id) {
        try {
            return this.msApiConectorBDLClient.getStatsByGame(id);

        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
}
