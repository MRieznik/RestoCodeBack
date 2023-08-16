# **RESTOCODE**

Esta pagina permite, mediante el uso del rol "admin", eliminar usuarios y controlar las reservas del bar.

**TECNOLOGIA UTILIZADAS**

- Lenguaje de programación: JavaScript.
- Framework: Node JS.
- Base de datos: Mongo.
- Otras tecnologías: express, jwt.

**ESTRUCTURA**

- controllers: Encontramos el CRUD de las reservas y los usuarios. También encripta la contraseña de los usuarios al registrarse.
- db: conecta con la base de datos.
- middleware: autenticación del token.
- models: crea los modelos de usuario y reserva.
- rutas: dirige hacia los diferentes sitios de la página web.


**BASE DE DATOS**

Utiliza Mongo para guardar las reservas y los usuarios mediante una colección pricinpal del bar: "restocode" y dos tablas diferentes: "reservas" y "usuarios".

**INTEGRANTES**

+ [Lautaro Gonzalez](https://github.com/LautaroGruiz)
+ [Luisina Martinez](https://github.com/luumartinez)
+ [Marcos Rieznik](https://github.com/MRieznik)
+ [Mariana Cervantes](https://github.com/MitaCervantes)
+ [Nazaret Campos](https://github.com/NazaretCS)
+ [Sergio Dominguez](https://github.com/SERGIO-DOM-23)
