# institute-person-ui

## Table of Contents

- [Overview](#overview)
- [Prerequisits](#prerequisits)
- [Setup for UI/UX Engineers](#setup-for-uiux-engineers)
  - [Build the Containers](#bulding-the-database-and-api)
  - [Install Dependencies](#install-dependencies)
  - [Manually build API container](#manually-build-ui-container)
  - [Run Dev-Server](#run-dev-server)
  - [Lints and fixes files](#lints-and-fixes-files)
  - [Customize configuration](#customize-configuration)

- [Setup for QA Testers](#setup-for-qa-testers)
  - [Start everything in containers](#start-everything-in-containers)
  - [Restart without loosing data](#restart-without-loosing-data)
  - [Restart and Reset test data](#restart-and-reset-test-data)
  - [Access Paths](#access-paths)

## Overview

This project contains a Vue SPA that uses an API from the institute-person-api project to manage a collection of people. This was kick-started using ChatGPT, by a polyglot software engineer that knew Javascript and had completed half of a VueJS developers course. See [here](https://chat.openai.com/share/5d5db6f2-2f42-491a-9673-3246feb20013) for the chat conversation that got me started.

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute-person&type=all&sort=name) are the repositories in the person microservice

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute&type=all&sort=name) are all of the repositories in the [Institute](https://github.com/agile-learning-institute/institute/tree/main) system

## Prerequisits

- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) if you want to run the API and DB in containers
- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database

## Setup for UI/UX Engineers

### Bulding the Database and API

To run over the API you will need to build containers from the database and API projects. First clone the repo's below.

- Install and build the database container from [this repo](https://github.com/agile-learning-institute/institute-mongodb)
- Install and build the API container from [this repo](https://github.com/agile-learning-institute/institute-person-api)

You can then use the docker compose up command from the API project to run the database and API containers for testing.

### Install Dependencies

``` bash
npm install
```

### Manually build UI container

The Dockerfile expects the project to be built for production, and the ```/dist/patch.txt``` file to contain the current git hash.

```bash
npm run build
export BRANCH=$(git branch --show-current)
export PATCH=$(git rev-parse $BRANCH)
echo $BRANCH.$PATCH > ./dist/patch.txt
docker build . --tag institute-person-ui
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

## Setup for QA Testers

### Build the Containers

To quickly build all containers, first clone the data and api repositoryies, and then you can run this script

```bash
./docker-build-all.sh
```

### Start everything in containers

```bash
docker compose up --detach
```

### Restart without loosing data

```bash
docker compose stop
docker compose start
```

### Restart and Reset test data

```bash
docker compose down
docker compose up --detach
```

### Access Paths

- Admin Screen [http://localhost/admin](http://localhost/admin)
- List People [http://localhost/people](http://localhost/people)
- Add Person [http://localhost/person](http://localhost/person)
- Edit Person [http://localhost/person/[id]](http://localhost/person/[id])

NOTE: After you add a person you are automatically routed to the Edit Person page for that person. You can change the ID in the Edit Person URI to edit other people.

## Backlog

- [x] Update Admin page with CI List
- [x] Implement UI Version Info
- [x] Containerize Build from Ngnix - Comopse with API/DB
- [x] Add /people route with links to /person/[id]
- [x] Update PersonForm with new fields from API
- [ ] Add onBlur based patch updates
- [ ] Fix non-scoped styles in PeopleForm.vue component
- [ ] Add validators for eMail, phone
- [ ] Add size limiters to name, description, eMail, gitHub, location
- [ ] Add drop-down selectors for Status, Device, Title
- [ ] Add better error handling
- [ ] Add unit testing
- [ ] Add cypress testing
- [ ] Add pagination to /people route
