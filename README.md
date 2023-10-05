# institute-person-ui

## Table of Contents

- Overview
- Prerequisits
- Setup for UI/UX Engineers
- Setup for QA Testers

## Overview

This project contains a Vue SPA that uses an API from the institute-person-api project to manage a collection of people. This was kick-started using ChatGPT, by a polyglot software engineer that knew Javascript and had completed half of a VueJS developers course. See [here](https://chat.openai.com/share/5d5db6f2-2f42-491a-9673-3246feb20013) for the chat conversation that got me started.

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute-person&type=all&sort=name) are the repositories in the person triplet

[here](https://github.com/orgs/agile-learning-institute/repositories?q=institute&type=all&sort=name) are all of the repositories in the [Institute](https://github.com/agile-learning-institute/institute/tree/main) system

## Prerequisits

- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) if you want to run the API and DB in containers
- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database

## Setup for UI/UX Engineers

### Bulding the Database and API

To run over the API you will need to

- Install and build the database container from [this repo](https://github.com/agile-learning-institute/institute-person-db)
- Install and build the API container from [this repo](https://github.com/agile-learning-institute/institute-person-api)
- You can now run the following commands in the institute-person-api folder to run the API/DB containers

### Start the API/DB containers

```bash
docker compose up --detach
```

### Restart the API without loosing data

```bash
docker compose stop
docker compose start
```

### Restart the API and Reset test data

```bash
docker compose down
docker compose up --detach
```

### Install Dependencies

``` bash
npm install
```

### Run Dev-Server with Mock API (TODO)

``` bash
npm run local
```

### Run Dev-Server with Containerized API

``` bash
npm run serve
```

### Lints and fixes files

``` bash
npm run lint
```

## Setup for QA Testers

### Build all the containers

To run everything in containers you will need to

- Install and build the database container from [this repo](https://github.com/agile-learning-institute/institute-person-db)
- Install and build the API container from [this repo](https://github.com/agile-learning-institute/institute-person-api)
- Build the UI container by running these commands

```bash
npm run build
docker build . --tag institute-person-api
```

Now you can run all the containers with

```bash
docker compose up --detach
```

and the access the UI at these routes

- [Admin Screen](http://localhost:8080/admin)
- [Add Person](http://localhost:8080/person)
- [Edit Person](http://localhost:8080/person/651dfe6c13605cd1946273c2)

NOTE: After you add a person you are automatically routed to the Edit Person page for that person. You can replace the ID in the Edit Person link above to edit other people.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
