package com.venkata.bookstore.bookstoreserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class BookstoreServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookstoreServerApplication.class, args);
	}

}
