package com.venkata.bookstore.bookstoreserver.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.venkata.bookstore.bookstoreserver.service.BookStoreService;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/bookstore")
public class BookStoreResource {

    @Autowired
    private BookStoreService bookStoreService;

    @GetMapping("/welcome")
    public ResponseEntity<Object> welcome() {
        return new ResponseEntity<>(bookStoreService.welcome(), HttpStatus.OK);
    }

    @GetMapping("/getAllBooks")
    public ResponseEntity<Object> getAllBooks() {
        return new ResponseEntity<>(bookStoreService.getAllBooks(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getImage/{bookid}", produces = "application/json")
    public ResponseEntity<Object> getImageByBookId(@PathVariable("bookid") String bookid) {
        return new ResponseEntity<>(bookStoreService.getImageByBookId(bookid), HttpStatus.OK);
    }

}
