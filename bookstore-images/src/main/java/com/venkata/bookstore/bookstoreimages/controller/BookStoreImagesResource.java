package com.venkata.bookstore.bookstoreimages.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.Optional;

import com.venkata.bookstore.bookstoreimages.config.*;

@RestController
@RequestMapping("/api/bookstore")
public class BookStoreImagesResource {

    @Value("${welcomeMsg}")
    private String welcomeMsg;

    @Value("${staticdelay}")
    private Integer staticdelay;

    @Autowired
    private ApplicationProps applicationProps;


    @GetMapping("/getImage/{bookid}")
    public ResponseEntity<Object> getImageById(@PathVariable("bookid") String bookidStr) {

        try{Thread.sleep(staticdelay);}catch(Exception e){e.printStackTrace();};

        Optional<Books> result =  applicationProps.getBooks().stream()
                .filter(book -> book.getBookId().equals(bookidStr))
                .findFirst();


        return new ResponseEntity<>(result.isPresent() ? result.get().getImageUrl() : "No Image", HttpStatus.OK);
    }

    @GetMapping("/welcome")
    public ResponseEntity<Object> welcome() {
        return new ResponseEntity<>(welcomeMsg, HttpStatus.OK);
    }

}
