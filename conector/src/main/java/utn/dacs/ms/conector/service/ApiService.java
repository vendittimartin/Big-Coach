package utn.dacs.ms.conector.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import utn.dacs.ms.conector.api.client.ApiClient;
import utn.dacs.ms.conector.dto.NoticiaDTO;
import utn.dacs.ms.conector.exceptions.BffException;
import utn.dacs.ms.conector.exceptions.ErrorEnum;

@Service
@Slf4j
public class ApiService {

	@Autowired
    private ApiClient apiClient;

    public List<NoticiaDTO> getNoticias() {
        String apiKey = "baca6d3ac2msh5a1b2d3367c8635p1cf69ajsn7bf1420ab90a";
        try {
            return this.apiClient.getNoticias(apiKey);
        } catch (Exception e) {
            log.error("Error producido al solicitar un recurso a /getNoticias", e);
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
}
