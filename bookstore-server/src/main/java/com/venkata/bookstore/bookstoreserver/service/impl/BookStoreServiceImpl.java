package com.venkata.bookstore.bookstoreserver.service.impl;

import com.venkata.bookstore.bookstoreserver.feignclient.BookStoreImagesFeignClient;
import com.venkata.bookstore.bookstoreserver.service.BookStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import com.venkata.bookstore.bookstoreserver.config.ApplicationProps;
import com.venkata.bookstore.bookstoreserver.config.Books;
import java.util.List;

@Service
public class BookStoreServiceImpl implements BookStoreService {

    @Value("${welcomeMsg}")
	private String welcomeMsg;

    @Autowired
    private ApplicationProps applicationProps;

    @Autowired
    private BookStoreImagesFeignClient bookStoreImagesFeignClient;

    @Override
    public String welcome() {
        return welcomeMsg;
    }

    @Override
    public List<Books> getAllBooks() {
        List<Books> books = applicationProps.getBooks();
        books.stream().forEach((book) -> book.setImageUrl(bookStoreImagesFeignClient.getImageByBookId(book.getBookId())));
        return books;
    }

    @Override
    public String getImageByBookId(String bookid) {
        return bookStoreImagesFeignClient.getImageByBookId(bookid);
    }
    
}