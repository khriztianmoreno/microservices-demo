# Microservices demo
Ejemplo simple de microservicios utilizando ReactJS para el frontend y Zeit's [micro](https://github.com/zeit/micro) para el backend.

## Presentation Slides

[Arquitecturas de Microservicios](http://slides.com/khriztianmoreno/microservices-architectures) - Khriztianmoreno

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


## Built With

* [NodeJS](https://www.nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine. 
* [micro](https://github.com/zeit/micro) -  Async HTTP microservices
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces

## Authors

* **Cristian Moreno** - *FullStack JavaScript Developer* - [Github](https://github.com/khriztianmoreno)
* **David Higuita** - *FullStack JavaScript Developer* - [Github](https://github.com/davidgit75)

See also the list of [contributors](https://github.com/khriztianmoreno/microservices-demo/contributors) who participated in this project.

## License

This project is licensed under Copy Right - see the [LICENSE.md](LICENSE.md) file for details
