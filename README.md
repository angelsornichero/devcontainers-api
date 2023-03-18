# Devcontainers app

This is a fast and easy app made with devcontainers, the main objective of this project is learning how devcontainers and docker works.

## Setup (Docker)
Write enviroment variables on `.env`  Build the app with [docker-compose](https://docs.docker.com/compose/): 
```bash
docker-compose build
docker-compose up
```
In this moment maybe the aplication gives an error because database doesn't exists so you only need go to the mysql running container and create the database

I reccomend you to use [vscode-devcontainers](https://code.visualstudio.com/docs/devcontainers/containers) for develop better

## Setup (Local)
Firstly you need [mysql](https://www.mysql.com/) and [node](https://nodejs.org/es) then create a database of mysql for the project. Afterwards write enviroment variables on `.env` install dependencies with [npm](https://www.npmjs.com/) and run opn development mode: 
```bash
npm i
npm run dev
```


