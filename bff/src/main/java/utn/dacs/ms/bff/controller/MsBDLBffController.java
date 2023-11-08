package utn.dacs.ms.bff.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.dto.EstadisticaPartidoDTO;
import utn.dacs.ms.bff.dto.PartidoDTO;
import utn.dacs.ms.bff.service.MsApiConectorBDLService;

import java.util.List;

@RestController
@RequestMapping("/conectorBDL")
@Slf4j
public class MsBDLBffController {

    @Autowired
    private MsApiConectorBDLService apiConectorService;

    @GetMapping("/getGamesByDateNow")
    public List<PartidoDTO> getGamesByDateNow() {
        return apiConectorService.getGamesByDateNow();
    }

    @GetMapping("/getGamesIDByDateYesterday")
    public List<Long> getGamesIDByDateYesterday() {
        return apiConectorService.getGamesIDByDateYesterday();
    }

    @GetMapping("/getStatsByGame/{id}")
    public List<EstadisticaPartidoDTO> getStatsByGame(@PathVariable(value="id") Long id) {
        return apiConectorService.getStatsByGame(id);
    }
    @GetMapping("/getGameById/{id}")
    public PartidoDTO getGameById(@PathVariable(value="id") Long id) {
        return apiConectorService.getGameById(id);
    }
}
