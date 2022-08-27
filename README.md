# Personal Web Page Frontend

This website is built on [React](https://reactjs.org/)

## Setup

If this is your first time building this project, please run:
```sh
npm install
```

To run the project in development mode
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the page

## Deployment

### Build the project 
Run the command below to build
```sh
npm run build
```
You should find compiled code in ./build

### Deploy using Nginx + Docker
Default port of the website should be `80`. If port `80` is already in use, please change the port mapping in `docker-compose.yml` file.
Then run the following
```sh
docker compose up -d
```
