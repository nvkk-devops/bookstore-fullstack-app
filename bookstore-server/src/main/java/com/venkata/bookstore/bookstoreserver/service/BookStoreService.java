package com.venkata.bookstore.bookstoreserver.service;

import java.util.List;
import com.venkata.bookstore.bookstoreserver.config.Books;

public interface BookStoreService {

    public String welcome();

    public List<Books> getAllBooks();

    public String getImageByBookId(String bookid);

}
