package utn.dacs.ms.conector.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.conector.api.client.ApiClient;
import utn.dacs.ms.conector.dto.EstadisticaDTO;
import utn.dacs.ms.conector.dto.PartidoDTO;
import utn.dacs.ms.conector.dto.RespuestaDTO;
import utn.dacs.ms.conector.exceptions.BffException;
import utn.dacs.ms.conector.exceptions.ErrorEnum;

@Service
@Slf4j
public class ApiService {

	@Autowired
    private ApiClient apiClient;

    public List<PartidoDTO> getGamesByDateNow() {
        LocalDate date = LocalDate.now();
        String dateNew = date.toString();
        try {
            return this.apiClient.getGamesByDate(dateNew).getData();
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
    public List<Long> getGamesIDByDateYesterday() {
        LocalDate date = LocalDate.now();
        date = date.minusDays(1);
        String dateNew = date.toString();
        try {
            RespuestaDTO<PartidoDTO> response = this.apiClient.getGamesByDate(dateNew);
            List<Long> gamesId = response.getData().stream().map(res -> res.getId()).collect(Collectors.toList());
            return gamesId;
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }

    public List<EstadisticaDTO> getStatsByGame(Long id) {
        try {
            return this.apiClient.getStatsByGame(id).getData();
        } catch (Exception e) {
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
}
