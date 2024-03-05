# mentorhub-person-ui

## Table of Contents

- [Overview](#overview)
- [Prerequisits](#prerequisits)
- [Running Backing Services](#install-dependencies)
- [Build and Running the UI](#build-and-run-the-ui)
- [Buid and test containers locally](#manually-build-and-test-ui-container)
- [Access Paths](#access-paths)
- [Observability and Configuration](#observability-and-configuration)
- [Backlog and Feature Branch info](#backlog)

## Overview

This project contains a Vue SPA that uses [this](https://github.com/agile-learning-institute/institute-person-api) API.

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute&type=all&sort=name) are all of the repositories in the [Institute](https://github.com/agile-learning-institute/institute/tree/main) system

## Prerequisits

- [mentorHub Developer Edition](https://github.com/agile-learning-institute/mentorHub/blob/main/mentorHub-developer-edition/README.md)
- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - if you want to build locally

### Optionally

- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database

### Using the Database and API Containers

To run the API and Test Database locally, you can use the following command. 

```bash
mh up person-api
```

## Build and Run the UI

### Install Dependencies

``` bash
npm install
```

### Run Dev-Server

``` bash
npm run serve
```

### Lints and fixes files

``` bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Manually build and test UI container

After executing the docker-build script as outlined below, you can use the [Access Paths](#access-paths) to test the applicaiton.

```bash
./src/docker/docker-build.sh
```

## Access Paths

### A word on ports

NOTE: If you are running the UI in developer mode, you can access the app on port 8080. If you are running the application from containers, you can access the UI at the default HTTP port of 80.

You should now have access to the application, you can access the following pages

- Admin Screen [http://localhost/admin](http://localhost/admin)
- Default [http://localhost/](http://localhost/) routes to List People

You can also access the List, Add and Edit views directly at

- List People [http://localhost/people](http://localhost/people)
- Add Person [http://localhost/person](http://localhost/person)
- Edit Person [http://localhost/person/[id]](http://localhost/person/[id])

NOTE: After you add a person you are automatically routed to the Edit Person page for that person. You can change the ID in the Edit Person URI to edit other people.

## Observability and configuration

The ```/admin``` route will return a list of configuration values.

The Dockerfile uses a 2-stage build, and supports multi-architecture builds. See [docker-build.sh](./src/docker/docker-build.sh) for details about building in the local architecture for testing.
