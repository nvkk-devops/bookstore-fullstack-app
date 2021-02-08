# Start with a base image containing Java runtime (mine java 8)
FROM openjdk:8u212-jdk-slim
# Add Maintainer Info
LABEL maintainer="nvenkatakiran@gmail.com"
# Add a volume pointing to /tmp
VOLUME /tmp
# Make port 8080 available to the world outside this container
EXPOSE 8080

# The application's jar file (when packaged)
ARG ARTIFACT_FILE=bookstore-images-0.0.1.jar 
# Add the application's jar to the container
ADD target/${ARTIFACT_FILE} ${ARTIFACT_FILE}

# Run the jar file 
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/bookstore-images-0.0.1.jar"]