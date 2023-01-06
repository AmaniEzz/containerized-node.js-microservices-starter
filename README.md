# Containerized Node.js Microservices Starter Template Using Docker and Nginx as a Reverse Proxy.
Starter template for developing Node.js Microservices with docker for Containerizing and Nginx as a reverse proxy to route user requests to the appropriate server.

# Usage

1. Clone the repo
2. Install node, docker and docker compose on the system.
3. Run npm install to install dependencies in both ```/users``` and ```/store``` folders.
4. Run ```docker compose up``` --build -d` to build the docker image.
5. Run ```docker-compose up``` to start the container.

# Test it

- Go to ```http://localhost/users``` you should see the following respone

![image](https://user-images.githubusercontent.com/37496018/211098808-bc131f4e-61f3-4fd9-8399-30e582324aa3.png)

- Go to ```http://localhost/store``` you should see the following respone

![image](https://user-images.githubusercontent.com/37496018/211098631-26bb02e4-c845-4ae7-85d2-58c37896b516.png)

