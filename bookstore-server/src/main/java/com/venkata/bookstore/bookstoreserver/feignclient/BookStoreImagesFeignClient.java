package com.venkata.bookstore.bookstoreserver.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@FeignClient(value = "bookstoreimages",
        url = "${bookstore.images.url}")
public interface BookStoreImagesFeignClient {

    String API_PREFIX = "/api/bookstore";
    
    @RequestMapping(method = RequestMethod.GET, value = API_PREFIX + "/getImage/{bookid}", produces = "application/json")
    String getImageByBookId(@PathVariable("bookid") String bookid);

}