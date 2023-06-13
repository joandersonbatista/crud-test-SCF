# Installing

It is necessary before installing this project, to have installed:

- Nodejs: https://nodejs.org/en/
- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

To run the application follow the steps:

```bash
sudo make up
```

or

```bash
npm i
sudo docker-compose up -d
```

# SCF Teste API

This is my attempt to create an API with [node.js](https://nodejs.org/en/) and [typescript](https://www.typescriptlang.org/) following the principles of [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). I'm using [express.js](https://expressjs.com/pt-br/), but the idea is that you can replace it with any framework you want.


## Clean Architecture visual guide

Here is a visual guide that may help you:

[![Clean Architecture - By Uncle Bob](https://raw.githubusercontent.com/luizomf/clean-architecture-api-boilerplate/master/docs/clean-architecture.png)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Todo

- [x] Create CRUD operations for "user"
- [x] Create sign-in system with token
- [x] Add authorization token to user routes (except "create")
- [ ] Create a refresh token route to allow regenerate tokens via refresh token

# Routes

Here are routes I already created:

### User

| `/user`    |             |                 |     |
| ---------- | ----------- | --------------- | --- |
| **Method** | **Route**   | **Description** |
| POST       | `/user`     | create user     |
| POST       | `/user/login`     | log in the system     |
| GET        | `/user/` | get user        |
| GET        | `/user/all` | get all users        |
| GET        | `/user/access` | Return how many times a given user was read        |
| DELETE     | `/user/:id` | delete user     |
| PUT        | `/user/:id` | update user     |
