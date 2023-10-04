# institute-person-ui

This project contains a Vue SPA that uses an API from the institute-person-api project to manage a collection of people. This was developed in a few hours using ChatGPT, by a polyglot software engineer that knew Javascript and had completed half of a VueJS developers course. See [here](https://chat.openai.com/share/5d5db6f2-2f42-491a-9673-3246feb20013) for the chat conversation.

## Prerequisits

- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) if you want to run the API and DB in containers
- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database


To run full end-to-end locally, you need to build and run the database container, and the API. Clone [this repo](https://github.com/agile-learning-institute/institute-person-db) and follow the instructions to build (Just Build) the database container. Clone [this repo](https://github.com/agile-learning-institute/institute-person-api) and follow the instructions to build that container, and then to run both the db and api containers.

Once those containers are running you can connect with MongoCompas to verify that the database agile-learning-institute exists, with a collection named people, and you can use the API from the CURL command to verify that the API is running.

## Project setup

``` bash
npm install
```

### Compiles and hot-reloads for development with a Mock API

``` bash
npm run local
```

### Compiles and hot-reloads for development with a Containerized API

``` bash
npm run serve
```

#### Routes

- [localhost:8081/](http://localhost:8081/) redirects to /person
- [localhost:8081/person](http://localhost:8081/person) is the add a new person page
- [localhost:8081/person/ID](http://localhost:8081/person/ID) is the edit person page
- [localhost:8081/admin](http://localhost:8081/admin) is the Admin dashboard

### Compiles and minifies for personion

``` bash
npm run build
```

### Lints and fixes files

``` bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
