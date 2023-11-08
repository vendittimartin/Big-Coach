package utn.dacs.ms.bff.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.dto.NoticiaDTO;
import utn.dacs.ms.bff.service.MsApiConectorNewsService;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class MsNewsBffController {

    @Autowired
    private MsApiConectorNewsService apiConectorService;

    @GetMapping("/getNoticias")
    public List<NoticiaDTO> getNoticias() {
        return apiConectorService.getNoticias();
    }
}
