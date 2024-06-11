## Concurrent Startup of Angular and Node.js Applications with Docker Compose

### Prerequisites

- Docker installed on your machine. You can download and install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).

### Terminal Commands

#### Run Docker Containers

To start both applications concurrently in Docker containers, use the following command:

```bash
docker-compose up
```

### Attribution

This project is part of the REST Countries Challenge provided by Frontend Mentors. The challenge includes implementing features such as light/dark mode switch, dynamic card population with JSON data, search functionality, filtering by region, and creating a details page for each country. Additional features include card styling, animation, and responsive design.

For more details on the challenge, visit the following link:

- RESTful Countries Challenge: [https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

### Topics Involved in Concurrent Startup

1. **Docker Compose Configuration**: 
   - Docker Compose is used to define and run multi-container Docker applications. In this setup, it's used to specify the services for the client and server applications, their build configurations, ports mapping, and network connections.

2. **Dockerfile for Client and Server**:
   - Each application has its own Dockerfile, which specifies how the Docker image for that application should be built. The Dockerfile includes instructions for installing dependencies, copying source code, and configuring the runtime environment.

3. **Networking**:
   - Docker Compose sets up a default bridge network, allowing the client and server containers to communicate with each other. Additionally, the client container is connected to a frontend network, which could be useful for communication with other frontend services in the future.

4. **Port Mapping**:
   - Port mapping is configured in the `docker-compose.yml` file to expose ports on the host machine and forward traffic to the respective ports inside the Docker containers. This allows access to the client (Angular) application on port 4200 and the server (Node.js) application on port 5000.

5. **Volume Mounting**:
   - Volume mounting is used to map local project directories to directories inside the Docker containers. This enables live code changes without needing to rebuild the Docker images.