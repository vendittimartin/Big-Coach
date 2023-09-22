package utn.dacs.ms.bff;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsDacsBffApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsDacsBffApplication.class, args);
	}

}
