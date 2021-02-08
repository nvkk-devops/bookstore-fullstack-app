package com.venkata.bookstore.bookstoreweb;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import java.util.*;
/**
 * This is a helper Java class that provides an alternative to creating a web.xml.
 * This will be invoked only when the application is deployed to a servlet container like Tomcat, JBoss etc.
 */
public class ApplicationWebXml extends SpringBootServletInitializer {
    private static final String SPRING_PROFILE_DEFAULT = "spring.profiles.default";

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        Map<String, Object> defProperties = new HashMap<>();
        defProperties.put(SPRING_PROFILE_DEFAULT, "prod");
        application.application().setDefaultProperties(defProperties);
        return application.sources(BookstoreWebApplication.class);
    }
}
