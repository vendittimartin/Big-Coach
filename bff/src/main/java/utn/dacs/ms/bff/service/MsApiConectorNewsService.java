package utn.dacs.ms.bff.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.bff.api.client.MsApiConectorNewsClient;
import utn.dacs.ms.bff.dto.NoticiaDTO;
import utn.dacs.ms.bff.exceptions.BffException;
import utn.dacs.ms.bff.exceptions.ErrorEnum;

import java.util.List;

@Service
@Slf4j
public class MsApiConectorNewsService {

	@Autowired
    private MsApiConectorNewsClient msApiConectorNewsClient;

    public List<NoticiaDTO> getNoticias() {
        try {
            return this.msApiConectorNewsClient.getNoticias();
        } catch (Exception e) {
           log.error("Error producido al solicitar un recurso a /conectorNews/getNoticias", e);
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
}
