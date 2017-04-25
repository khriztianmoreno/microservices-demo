# Microservices demo
Ejemplo simple de microservicios utilizando ReactJS para el frontend y Zeit's [micro](https://github.com/zeit/micro) para el backend.

## Install Backend & Fronent folders

En cada una de las carpetas correr el siguiente comando

```
$ npm install
```

## Run a microservice

```
$ cd backend

# Corre el microservicio para subir la imagen
$ npm run start-upload

# Corre el microservicio para hacer el filtro a la imagen
$ npm run start-preview
```

## Testing with curl

### Upload an image

```
$ curl -F "file=@./image.jpg" http://localhost:49153/
```

### Preview & Save

```
$ curl -X POST -d "{\"image\": \"xxxxxx-xxxx-xxxx-xxxx-xxxxxx.jpg\", \"filter\": \"sepia\"}" http://localhost:49154/
```

