package utn.dacs.ms.conector.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
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

    @Value("${dacs.api.key}")
    private String API_KEY;
    public List<NoticiaDTO> getNoticias() {
        String apiKey = API_KEY;
        try {
            return this.apiClient.getNoticias(apiKey);
        } catch (Exception e) {
            log.error("Error producido al solicitar un recurso a /getNoticias", e);
            throw new BffException(ErrorEnum.ERROR_API);
        }
    }
}
