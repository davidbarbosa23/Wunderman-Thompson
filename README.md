# Wunderman-Thompson
> Prueba técnica - Desarrollador Full Stack

## Antes de iniciar
* Se requiere de las siguientes dependencias : 
  * MySQL: ^5.7
  * PHP: ^7.3
  * Composer: ^1.10.0
  * Node.js: ^12.19.0

* El API (`/server`) y el cliente (`/client`) funcionan como entornos completamente aislados, por lo cual, será necesario la instalación de paquetes en cada directorio.

## Instalación de API (Servidor)
```sh
$ cd server
$ composer install
```
#### Variables de entorno 
Es necesario modificar las variables correspondientes a la conexión de base de datos incluidas en el archivo `.env` (en caso de no existir el archivo, se puede crear usando como base `.env.example`)
```
...
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=root
DB_PASSWORD=
...
```
#### Migración y Datos de ejemplo
Los comandos `migrate` y `db:seed` se puede ejecutar únicamente después de configurar las variables de entorno correspondientes a la base de datos.
* ##### Migración
```sh
$ php artisan migrate
```
* ##### Datos de ejemplo
Estos datos eliminarán cualquier registro incluido en las tablas.
```sh
$ php artisan db:seed
```
### Iniciar Servidor
Por defecto se iniciará en la ruta [127.0.0.1:8000](http://127.0.0.1:8000)
```sh
$ php artisan serve
```


## Instalación de Cliente
```sh
$ cd client
$ npm i -g @angular/cli
$ npm i
```
#### Variables
Por defecto la ruta usada para la consulta de la API es `127.0.0.1:8000/api`, en caso de modificarse, será necesario actualizar el archivo `client/src/app/shared/globals.ts`.
```
...
API_URI: string = 'http://127.0.0.1:8000/api';
...
```
### Iniciar Cliente
Por defecto se iniciará en la ruta [localhost:4200](http://localhost:4200)
```sh
$ ng serve -o
```

## Uso de Aplicación
* __/home__ [localhost:4200](http://localhost:4200)
##### Acceso sin auth
* __/login__ Formulario de ingreso. Teniendo en cuenta la migración de datos para la API, quedará registrado un usuario "guest" para ingresar directamente a las secciones protegidas con autenticación.
  * Email Address: email@email.com
  * Password: 123456
* __/register__ Formulario de registro.
##### Acceso con auth
* __/profile__ Presentación de usuario.
* __/items__  
  * All Items: Lista de entradas completa.
  * Active Items: Lista de entradas sin registro de _softDelete_.
    * Trash Button: Enviar item a la papelera.
  * Trash Items: Lista de entradas con registro de _softDelete_.
    * Delete Button: Eliminar item definitivamente.
    * Restore Button: Sacar item de la papelera. / Enviar a la lista de items activos.
* __/items/add__ Formulario de creación de Item.
* __/items/edit/:id__ Formulario de edición de Item.

