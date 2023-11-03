package utn.dacs.ms.conector.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import utn.dacs.ms.conector.dto.EstadisticaDTO;
import utn.dacs.ms.conector.dto.PartidoDTO;
import utn.dacs.ms.conector.dto.RespuestaDTO;


@FeignClient(
			name = "apiClient", 
			url = "${feign.client.config.apiClient.url}"
			)

public interface ApiClient {

	@GetMapping("/games?dates[]={date}")
	RespuestaDTO<PartidoDTO> getGamesByDate(@PathVariable(name= "date") String date);

	@GetMapping("/games/{id}")
	PartidoDTO getGameByID(@PathVariable(name= "id") Long id);

	@GetMapping("/stats?game_ids[]={id}")
	RespuestaDTO<EstadisticaDTO> getStatsByGame(@PathVariable(name="id") Long id);
}
