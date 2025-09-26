# --- 1. Build Stage: Use Maven and JDK to compile and package the app ---
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copy pom.xml from the current context (which is now back-end/demo)
COPY pom.xml .

# This step attempts to download dependencies, caching the layer
RUN mvn dependency:go-offline

# COPY . . copies the remaining files (like the src/ directory) 
# from the current context (back-end/demo) to /app inside the container
COPY . . 

# Build the application, creating the JAR file
RUN mvn clean package -DskipTests

# --- 2. Run Stage: Use a lighter JDK-only image to run the JAR ---
FROM openjdk:17-jdk-slim
EXPOSE 8080
# The JAR file name is based on your pom.xml artifact and version.
# Make sure to replace <your-app-name>-<version> with the actual name.
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]