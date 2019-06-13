package com.example.demo;

import com.example.demo.domain.CarRepository;
import org.slf4j.Logger; //logs output to the console
import org.slf4j.LoggerFactory; //logs output to the console
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo.domain.CarInfo;
import com.example.demo.domain.CarRepository;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CarShop {
    private static final Logger log = LoggerFactory.getLogger(CarShop.class);
    public static void main(String[] args) {
        SpringApplication.run(CarShop.class, args);
    }

    @Bean
    public CommandLineRunner demo(CarRepository repository){
        return args ->{
            //save some cars
            repository.save(new CarInfo("Audi", "Q7", 2020));
            repository.save(new CarInfo("Jaguar", "F-Pace", 2021));
            repository.save(new CarInfo("Maserati", "Levante", 2020));
            repository.save(new CarInfo("Porsche", "Cayenne", 2021));

            //read all cars
            log.info("Car found with findAll() : ");
            log.info("---------------------------------");
            for(CarInfo car : repository.findAll()) {
                log.info(car.toString());
            }
            log.info("");

            //find car by year
            repository.findById(1L)
                    .ifPresent(car -> {
                        log.info("Car found with findByYear(1L) : ");
                        log.info("-----------------------------------");
                        log.info(car.toString());
                        log.info("");
                    });

            //find cars by model
            log.info("Car found with findByModel('Charger') : ");
            log.info("----------------------------------");
            repository .findByModel("Charger").forEach(bauer -> {
                log.info(bauer.toString());
            });
        };
    }

}
