package pro.poolspace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PoolSpace {
    public PoolSpace() {
    }

    public static void main(String[] args) {
        SpringApplication.run(PoolSpace.class, args);
        System.out.println("PoolSpace run on http://localhost:8080/");
    }

}
