package com.venkata.bookstore.bookstoreserver.config;

import java.util.List;
import java.util.Map;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ConfigurationProperties(prefix = "application")
@PropertySource(value = "classpath:application.yml")
public class ApplicationProps {
    
    private List<Map<String, Object>> props;
    private List<Books> books;

    public List<Map<String, Object>> getProps() {
        return props;
    }

    public void setProps(List<Map<String, Object>> props) {
        this.props = props;
    }

    public List<Books> getBooks() {
        return books;
    }

    public void setBooks(List<Books> books) {
        this.books = books;
    }

    
}