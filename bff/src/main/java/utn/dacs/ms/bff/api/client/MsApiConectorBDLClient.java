package utn.dacs.ms.bff.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import utn.dacs.ms.bff.dto.BuildInfoDTO;
import utn.dacs.ms.bff.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.bff.dto.NoticiaDTO;
import utn.dacs.ms.bff.dto.PartidoDTO;

import javax.servlet.http.Part;
import java.util.List;


@FeignClient(
        name = "msApiConectorBDLClient",
        url = "${feign.client.config.msApiConectorBDLClient.url}"
)

public interface MsApiConectorBDLClient {

    @GetMapping("/getGamesByDateNow")
    List<PartidoDTO> getGamesByDateNow();

    @GetMapping("/getGamesIDByDateYesterday")
    List<Long> getGamesIDByDateYesterday();

    @GetMapping("/getStatsByGame/{id}")
    List<EstadisticaPartidoDTO> getStatsByGame(@PathVariable(value="id") Long id);
}
