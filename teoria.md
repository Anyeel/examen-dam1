# Teoria

Realiza el examen directamente sobre el archivo!

Este examen solo muestra algunos conceptos al azar que me parecen importantes, hay muchos!

Intenta añadir código cuando lo necesites utilizando

```lenguaje
codigo
```

1. ¿Que diferencia una variable creada con `let` de una creada con `const`?
La diferencia entre let y const es que const te crea una variable que no puede cambiar en ningún momento a lo largo del código, mientras que let si te lo permite.

2. ¿Qué es un dato primitivo? ¿y un objeto?
Un dato primitivo sería por ejemplo un número o un string, un objeto por otro lado se refiere a algo con lo que podemos interactuar en el código, guardando datos en él, realizandole consultas... 

2. ¿Qué diferencia hay entre `==` y `===`?
Los == son una comparación débil y los === son una comparación estricta. Un ejemplo de esto sería que 1 == "1" sería TRUE y estaríamos igualando un string a un número, mientras que 1 === "1" sería FALSE.

3. Analiza el siguiente código, ¿qué valor se mostrará en la consola?
```js
let a = 1;

function mi_funcion() {
    let a = 2;
}

mi_funcion();
console.log(a);
```
Por consola se mostrará un 1, esto es debido a que la variable que creamos dentro de la función solo existe dentro de la función, por eso además nos deja crearla con el mismo nombre que una variable ya existente.

4. ¿Qué es el DOM? Explícalo brevemente.
El DOM es una interfaz con la que nos ayudamos los desarrolladores a interactuar con HTML y XML, esto nos sirve por ejemplo para crear páginas webs.

5. ¿Este código es correcto? Si no lo es, ¿por qué?
```js
const boton = document.querySelector('button');
function saluda() {
    console.log('Hola');
}
boton.addEventListener('click', saluda());
```
Este código no es correcto, esto es debido a que la función "saluda" solo se va a ejecutar 1 sola vez, esto es debido a los corchetes () que tenemos en el eventListener, para que funcione como esperamos debemos quitarlos.

6. ¿Que formas de seleccionar elementos del DOM conoces? ¿Cuál es la diferencia entre ellas?
```javascript
    document.querySelector()        // Seleccionar elementos tales
    document.getElementById()       // Seleccionar unicamente ids
    document.getElementByClass()    // Seleccionar una clase
```
La diferencia entre las distintas formas radica en los elementos a los que seleccionamos, que pueden ser de distintos tipos, tales como: ids, clases...

7. ¿Qué es un evento? ¿Qué formas conoces de crearlos?
Un evento es una forma de llamada a una función cuando pasa otra cosa, por ejemplo cuando hacemos click en algo, que se ejecute una determinada función.
Forma de crearlo:
```javascript
elemento.addEventListener("detontante", función);
```

8. ¿Como se añade una libreria externa a un proyecto de JavaScript? Puedes usar p5 como referencia.
En el head de nuestro html podemos indicar: 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/addons/p5.sound.min.js"></script>
 ```
Lo que hará que incluyamos las funciones de esa libreria a nuestro proyecto de p5.

9. ¿Que es esto? `<meta charset="UTF-8">` ¿Por qué es importante?
Esto aparece en los HTML, son metadatos, los cuales son importantes para el funcionamiento de la página, estos pueden variar según de donde nos conectemos.

10. ¿Que es una función? Explica brevemente su sintaxis en el lenguaje que prefieras.
Una función es una parte del código que podemos usar como recurso, esta nos sirve para aislar maneras en las que funciona nuestro código y poder usarlas cuando lo necesitemos, esto nos proporciona un mayor orden a la hora de visualizar nuestro código y nos quita el hecho de tener código repetido.
