package com.example.gatepass;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class CdacProjectSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(CdacProjectSpringbootApplication.class, args);
    }
}
