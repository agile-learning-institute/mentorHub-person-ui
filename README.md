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
  - [Run the Containers from GitHub](#run-the-containers-from-github-container-registry)
  - [Access Paths](#access-paths)
  - [Restart without loosing data](#restart-containers-without-loosing-data)
  - [Restart and Reset test data](#restart-containers-and-reset-test-data)
  - [Build containers from source](#build-the-containers-from-source)

## Overview

This project contains a Vue SPA that uses an API from the institute-person-api project to manage a collection of people. This was kick-started using ChatGPT, by a polyglot software engineer that knew Javascript and had completed half of a VueJS developers course. See [here](https://chat.openai.com/share/5d5db6f2-2f42-491a-9673-3246feb20013) for the chat conversation that got me started.

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute-person&type=all&sort=name) are the repositories in the person microservice

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute&type=all&sort=name) are all of the repositories in the [Institute](https://github.com/agile-learning-institute/institute/tree/main) system

## Prerequisits

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - For Mac ```brew install docker```
- [GitHub Containers Configured](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic)
- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - if you want to build locally

### Optionally

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

The Dockerfile expects the project to be built for production, and the ```/dist/patch.txt``` file to contain the current git hash. For your convience the file ```docker-build.sh``` will run the following commands.

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

### Run the Containers from GitHub Container Registry

If you have installed the prerequisites open a terminal window, create a directory for your work, and use the commands below to launch the latest version published on our GitHub Container Registry. (NOTE: Only tested on Intel/Mac)

```bash
curl -o docker-compose.yaml -L https://github.com/agile-learning-institute/institute-person-ui/raw/main/docker-compose.yaml
docker compose up --detach
```

You will see four containers created, and after a few seconds you should see something like this

```bash
 ✔ Network institute-person-ui_default                   Created
 ✔ Container institute-person-ui-institute-mongodb-1     Healthy
 ✔ Container institute-person-ui-institute-mongosh-1     Exited
 ✔ Container institute-person-ui-institute-person-api-1  Started
 ✔ Container institute-person-ui-institute-person-ui-1   Started
 ```

### Access Paths

You should now have access to the application, you can access the following pages

- Default [http://localhost/](http://localhost/) routes to List People
- Admin Screen [http://localhost/admin](http://localhost/admin)

You can also access the List, Add and Edit views directly at

- List People [http://localhost/people](http://localhost/people)
- Add Person [http://localhost/person](http://localhost/person)
- Edit Person [http://localhost/person/[id]](http://localhost/person/[id])

NOTE: After you add a person you are automatically routed to the Edit Person page for that person. You can change the ID in the Edit Person URI to edit other people.

### Restart containers without loosing data

```bash
docker compose stop
docker compose start
```

### Restart containers and Reset test data

```bash
docker compose down
docker compose up --detach
```

### Build the containers from source

If you want to build from source to have access to code that has not been pushed yet, you can quickly build and run all containers, first clone the [data](https://github.com/agile-learning-institute/institute-mongodb) and [api](https://github.com/agile-learning-institute/institute-person-api) repo's as siblings to this repo, and then you can run this script:

```bash
./docker-build-all-and-run.sh
```

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
