# Sobre El Proyecto

Proyecto Final del curso de BackEnd en CoderHouse. Trata sobre un e-comerce con algunas funcionalidades propias de una pagina de compra. Incluye un chat.

## Sobre la Implementación

Ver en el siguiente link el despliegue del proyecto

`https://back-end-proyecto-final.herokuapp.com/`


## Sobre la Persistencia

Puede ser seteada en el archivo de configuracion /src/persistencia/daos/configDaos.js. Por defecto se encuentra vinculada a firebase pero puede ser cambiado tambien a memoria, mongodb o archivo local txt.

## Sobre la Autentificación

Se utiliza passport local

## Sobre los EndPoints

Estan agrupados en las siguientes rutas:
* /api/productos
* /api/arritos
* /api/mensajes
* /api/usuarios
* /api/auth

## Sobre Socket

Maneja el chat y entre sus principales caracteristicas está que no se puede enviar ni recibir mensajes si no se esta autenticado.

