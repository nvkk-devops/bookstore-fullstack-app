FROM node:12-alpine
ENV PORT=9000
COPY . .
RUN npm install
EXPOSE 9000
ENTRYPOINT ["npm", "run", "start" ]

# FROM openjdk:8u212-jdk-slim
# LABEL maintainer="nvenkatakiran@gmail.com"
# VOLUME /tmp
# EXPOSE 9000
# ARG ARTIFACT_FILE=bookstore-web-0.0.1.jar 
# ADD target/${ARTIFACT_FILE} ${ARTIFACT_FILE}
# ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/bookstore-web-0.0.1.jar"]

