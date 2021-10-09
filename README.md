# AskMeAnythingMVC_dockerized
Dockerized SaaS64-MVC project for gaining familiarity with Docker.

Clone the repo and run: docker-compose --env-file path/to/env/file/.env.["nameOfEnvFile"] up , to create and run the containers of the project
and you are up to go. The app runs on: http://localhost:80.

You can also pull the imaga from Dockerhub by running on your terminal: docker pull drososlalias/docker-mvc:latest.
After pulling the image, run:
docker container run -d --name yourname -p 80:8765 --env-file path/to/env/file/.env.["nameOfEnvFile] drososlalias/docker-mvc.
Go to http://localhost:80 and the app will be running.
