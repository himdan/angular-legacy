#Legacy angular
Docker environment for a **Legacy angular** application.
## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine: <br>
Check the official Docker documentation for information how to install Docker on your operating system. And then install Docker and supporting tools.

* Docker - [Official Website] - <a href="https://docs.docker.com/engine/install/">docker</a> <br>
* Docker Compose - [Official Website] - <a href="https://docs.docker.com/compose/install/">docker-compose</a> <br>
## Check angular requirement
Check the angular requirements in this page
> https://angular.io/guide/versions<br>
## BUILD REQUIRED DOCKER IMAGES
create the nvm_node docker image
```bash
docker build -t nvm_node_angular docker/angular --build-arg NODE_VERSION=<NODE_VERSION\>
```
WITH <NODE_VERSION\> is the node version calculated from  package.json
For example the current package.json work with the version 8.17.0 
```bash
docker build -t nvm_node_angular docker/angular --build-arg NODE_VERSION=8.17.0 
```

to serve the application
```bash
docker-compose up -d 
```
## Check Applications
**Check that those URLS works properly :** <br>
> http://127.0.0.1:4200<br>