# Examen 1er trimestre DAM

## IP

IP: 192.168.60.211

## Instrucciones

En este examen tendrás que realizar una serie de peticiones `HTTP` a un servidor con el fin de capturar banderas.

Identificarás las banderas porque estarán escritas en el siguiente formato `{}`. Por ejemplo `la bandera es {ejemplo}`.

El servidor estará disponible localmente, en la IP indicada el dia del examen en el puerto `3000`.

Puedes utilizar `curl` o `Python` para realizar las peticiones. Deberás entregar un `script` por cada ejercicio que realices, donde se muestre la bandera capturada en la terminal.

## Ejercicio 1: Hola mundo

Haz una llamada `GET` a la ruta `/`, la `bandera` estará en la respuesta.

## Ejercicio 2: Método

Para obtener la `bandera` empieza por hacer una petición `GET` a la ruta `/metodo`.

## Ejercicio 3: Enviando datos

El endpoint que usarás para este ejercicio es `/enviar_datos`

Para obtener **las banderas** tendrás que enviar una petición `POST` a la ruta `/shared_data` enviando **CUALQUIER** dato en la petición, ya sea en el `body` o en la propia `URL` adjuntandolos como una `query`.

## Ejercicio 4: Usuarios

Este endpoint consiste en hacer un login con un usuario.

Primero, obten los datos de los usuarios haciendo una petición `GET` a la ruta `/usuarios`.

Busca el usuario con el nombre `hiddenoter` y usar su `id` para hacer una petición `GET` a la ruta `/usuarios/{id}` y obtener su contraseña.

Por último, haz una petición `POST` a la ruta `/login` con los datos del usuario obtenidos anteriormente. Envialos en el siguiente formato:

```json
{
    "name": "nombre",
    "password": "contrasena"
}
```

La bandera está detrás del login.

## Ejercicio 5: Alquimia

Para obtener la `bandera` tendrás que hacer una petición `POST` a la ruta `/alquimia` enviando los siguientes datos:

claves y valores:
- **plomo**: un string de más de 100000 caracteres de longitud.
- **cobre**: una matriz con al menos 4 datos primitivos dentro. Al menos una debe ser un valor nulo.
- **gamma**: un objeto con tres claves, g1, g2 y g3, cada una debe tener un valor de 4 caracteres de longitud que pueda ser transformado a un número entero.
- **delta**: la suma de gamma.g1, gamma.g2 y gamma.g3 concatenados
- **alkahest**: un número entero de cuatro dígitos convertido a string.

