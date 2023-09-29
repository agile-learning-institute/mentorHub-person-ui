# people-ui

This project contains a Vue SPA that uses an API from the people-api project to manage a collection of people. This was developed in a few hours using ChatGPT, by a polyglot software engineer that knew Javascript and had completed half of a VueJS developers course. See [here](https://chat.openai.com/share/5d5db6f2-2f42-491a-9673-3246feb20013) for the chat conversation.

## Project setup

``` bash
npm install
```

### Compiles and hot-reloads for development

``` bash
npm run serve
```

#### Routes

- [localhost:8080/](localhost:8080/) redirects to /person
- [localhost:8080/person](localhost:8080/person) is the add a new person page
- [localhost:8080/person/ID](localhost:8080/person/ID) is the edit person page
- [localhost:8080/admin](localhost:8080/admin) is the Admin dashboard

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
