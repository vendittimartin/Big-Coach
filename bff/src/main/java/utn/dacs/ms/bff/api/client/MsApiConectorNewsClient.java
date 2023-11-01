package utn.dacs.ms.bff.api.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import utn.dacs.ms.bff.dto.BuildInfoDTO;
import utn.dacs.ms.bff.dto.NoticiaDTO;

import java.util.List;


@FeignClient(
			name = "msApiConectorNewsClient",
			url = "${feign.client.config.msApiConectorNewsClient.url}"
			)

public interface MsApiConectorNewsClient {

    @GetMapping("/ping")
    String ping();

    @GetMapping("/getNoticias")
    List<NoticiaDTO> getNoticias();
}
