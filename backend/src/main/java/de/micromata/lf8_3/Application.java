package de.micromata.lf8_3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.*;
import org.springframework.data.jpa.repository.config.*;

@SpringBootApplication()
@EntityScan("de.micromata.lf8_3.model")
@EnableJpaRepositories("de.micromata.lf8_3.repository")
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

}
