package utn.dacs.ms.conector.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import utn.dacs.ms.conector.configuration.ApplicationContextProvider;
import utn.dacs.ms.conector.dto.EstadisticaDTO;
import utn.dacs.ms.conector.dto.NoticiaDTO;
import utn.dacs.ms.conector.dto.PartidoDTO;
import utn.dacs.ms.conector.dto.RespuestaDTO;
import utn.dacs.ms.conector.service.ApiService;

@RestController
@RequestMapping(value = "/")
public class HomeController {
	
    @Autowired
    private ApiService apiService;
	
	
	@GetMapping(value = "/ping")
    public Object ping() {
        return "Hello from DACS MS CONECTOR ping";
    }

	@GetMapping(value = "/version")
    public Object version() {
        return ApplicationContextProvider.getApplicationContext().getBean("buildInfo");
    }

    @GetMapping("/getGamesByDateNow")
    public List<PartidoDTO> getGamesByDateNow() {
        return apiService.getGamesByDateNow();
    }
    @GetMapping("/getGamesIDByDateYesterday")
    public List<Long> getGamesIDByDateYesterday() {
        return apiService.getGamesIDByDateYesterday();
    }

    @GetMapping("/getStatsByGame/{id}")
    public List<EstadisticaDTO> getStatsByGame(@PathVariable(value = "id") Long id) {
        return apiService.getStatsByGame(id);
    }

}
