# mentorhub-person-ui

## Overview

This project contains a Vue SPA that uses [this](https://github.com/agile-learning-institute/institute-person-api) API.

[Here](https://github.com/orgs/agile-learning-institute/repositories?q=institute&type=all&sort=name) are all of the repositories in the [Institute](https://github.com/agile-learning-institute/institute/tree/main) system

## Prerequisits

- [mentorHub Developer Edition](https://github.com/agile-learning-institute/mentorHub/blob/main/mentorHub-developer-edition/README.md)
- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - if you want to build locally

### Optionally

- [Mongo Compass](https://www.mongodb.com/try/download/compass) - if you want a way to look into the database

## Running Locally

To run the full UI and backing services locally

```bash
mh up person
```

## Install Dependencies
``` bash
npm install
```

## Live Serve the UI Locally
```bash
npm run serve
```
This will start API and backing service containers to support testing.

## Lints and fixes files
``` bash
npm run lint
```

## Build a production deployment package
``` bash
npm run build
```

## Build and test the UI container
``` bash
npm run container
```
This will build the UI container and launch the UI service. After launched you can the access Paths below

## Access Paths
After running the appropiate command, you can access the API following routes

- Admin Screen [http://localhost:8083/admin](http://localhost:8083/admin)
- Default [http://localhost:8083/](http://localhost:8083/) routes to List People

You can also access the List, Add and Edit views directly at

- List People [http://localhost:8083/people](http://localhost:8083/people)
- Add Person [http://localhost:8083/person](http://localhost:8083/person)
- Edit Person [http://localhost:8083/person/aaaa00000000000000000021](http://localhost:8083/person/aaaa00000000000000000021)

NOTE: After you add a person you are automatically routed to the Edit Person page for that person. You can change the ID in the Edit Person URI to edit other people.

## Observability and configuration

The ```/admin``` route will return a list of configuration values.

The Dockerfile uses a 2-stage build, and supports multi-architecture builds. See [docker-build.sh](./src/docker/docker-build.sh) for details about building in the local architecture for testing.
