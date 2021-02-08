package com.venkata.bookstore.bookstoreweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class BookstoreWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookstoreWebApplication.class, args);
	}

}
