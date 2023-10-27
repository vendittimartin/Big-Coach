package utn.dacs.ms.conector.api.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;


@FeignClient(
			name = "apiClient", 
			url = "${feign.client.config.apiClient.url}"
			)

public interface ApiClient {

	@GetMapping("/articles?limit=5")
	<NoticiaDTO> List<NoticiaDTO> getNoticias(@RequestHeader("X-RapidAPI-Key") String apiKey);
    
}
