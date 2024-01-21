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

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - if you want to build locally

### Optionally

- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database

### Using the Database and API Containers

To run the API and Test Database locally, you can use the following command. See [here for details](https://github.com/agile-learning-institute/institute/blob/main/docker-compose/README.md) on how to stop/start the database.

```bash
/bin/bash =(curl -o - https://raw.githubusercontent.com/agile-learning-institute/mentorhub/main/docker-configurations/run-local.sh) person-api
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

## Backlog

- [x] Update Admin page with CI List
- [x] Implement UI Version Info
- [x] Containerize Build from Ngnix - Comopse with API/DB
- [x] Add /people route with links to /person/[id]
- [x] Update PersonForm with new fields from API
- [x] Patch updates with only dirty values
- [x] On-Blur auto save with Saving indicator
- [x] Implement Save error handling with generic "invalid" message
- [x] Open new/edit vues in new tab
- [x] Add New Person link to /people

- Feature Branch ```implement-vuex-store```
  - [x] Add improved page name from context in routes (list, new, name, admin)
  - [x] Properly Implment Store with Admin, Person Mutations
  - [x] Load Enums for pick lists at page load
  - [x] Add Collections list to Admin Page
  - [x] Add enumirators panels to admin page (Mentors, Partners, Enums by Name)
  - [x] Implement v-expansion-panel to collapse CI and Collection Lsts
  - [x] Fix non-scoped styles in PeopleForm.vue component

- Feature Branch ```improve-validations```
  - [ ] Add v-select selectors for Mentor, Partner, Status, Device, Title
  - [ ] Add size limiters to name, description, eMail, gitHub, location
  - [ ] Add validators for eMail, phone
  - [ ] Add better error messaging where needed (duplicate name error)

- Feature Branch ```search-people```
  - [ ] Add pagination with endless scroll to /people route
  - [ ] Add search to /people route

- Feature Branch ```secure-api-access```
  - [ ] Add JWT authentication

- Others
  - [ ] Add unit testing
  - [ ] Add cypress testing
