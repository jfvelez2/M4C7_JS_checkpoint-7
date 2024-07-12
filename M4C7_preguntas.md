# M4C7 - JavaScript Assignment
# Preguntas Teóricas

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?


JavaScript es el único lenguaje de programación que realmente puede entender un navegador web. **JS** está diseñado para ejecutarse en navegadores web y se caracteriza por su naturaleza interpretada, escritura dinámica y modelo de objetos basado en prototipos. Además, es un lenguaje débilmente tipado.

> JavaScript es un lenguaje de programación que agrega interactividad a las páginas web. Se utiliza para crear animaciones, juegos y otras funciones interactivas. JavaScript también se utiliza para hacer que las páginas web sean más receptivas y fáciles de usar. [The benefits of using JavaScript/Blog](https://www.linkedin.com/pulse/benefits-using-javascript-basit-ch)

Las ventajas de usar JS incluyen:
  1. **Velocidad**:  
  Es un lenguaje rápido, lo que significa que se puede utilizar para crear funciones interactivas sin ralentizar la página web.

  2. **Simplicidad**:  
    Es un lenguaje relativamente fácil de aprender, lo que lo hace accesible a una amplia gama de desarrolladores.

  3. **Popularidad**:  
    Es uno de los lenguajes de programación más populares del mundo, lo que significa que hay muchos recursos disponibles para ayudar a los desarrolladores a aprenderlo y utilizarlo.

  4. **Versatilidad**:   
    Se puede utilizar para crear una amplia variedad de funciones interactivas, desde animaciones simples hasta juegos complejos.

  5. **Interoperabilidad**:  
  Se puede utilizar con otros lenguajes de programación, como HTML y CSS, para crear potentes aplicaciones web.


![JS Advantages](https://media.licdn.com/dms/image/D4D12AQF0ttH8ju9CUw/article-cover_image-shrink_720_1280/0/1684521619529?e=2147483647&v=beta&t=XNVRk4kQFcvZmiObdAW0AyS6D_luKIlqITFKnDTlIMU)

En general, JavaScript es un lenguaje potente y versátil que se puede utilizar para crear una amplia variedad de funciones web interactivas. Sus diferencias con otros lenguajes de programación lo convierten en una opción ideal para desarrollar aplicaciones y servicios web interactivos. Algunas diferencias clave con otros lenguajes:

### 1. Interpretado *vs.* Compilado: 
  JavaScript se ejecuta directamente en el navegador sin necesidad de compilación previa, a diferencia de lenguajes como C++ o Java.

### 2. Orientado a objetos basado en prototipos:
  En JavaScript, los objetos se crean a partir de otros objetos (prototipos), en lugar de clases como en Java o C++.

### 3. Débilmente tipado y dinámico: 
  JavaScript no requiere declarar el tipo de dato de una variable. El tipo puede cambiar durante la ejecución del programa.

### 4. Funciones de primera clase: 
Las funciones en JavaScript se tratan como valores y pueden asignarse a variables, pasarse como argumentos, etc.

### 5. Manejo de eventos:
  JavaScript está diseñado para manejar eventos generados por el usuario o el navegador, como clicks o cargas de página. Permite por tanto automatizar tareas diarias por medio de la programación de *scripts* simples. 

>### JS fue creado para ser el único idioma que un navegador realmente pudiera entender. 
>
> Lo que esto significa es que puede escribir código JavaScript, simplemente abrirlo en el navegador, y ese navegador puede analizar el código, interpretarlo y luego ejecutar el programa. 
>
> Por esta razón por la cual algunas de las aplicaciones más potentes del mundo están integradas en Javascript (Gmail, Tweeter/X, Facebook usan JS en muchos de sus procesos).


## 2. ¿Cuáles son algunos tipos de datos JS?

En programación es importante conocer los tipos de datos con los que un lenguaje, en este caso Javascript, puede manejar y operar. Por esto es importante conocerlos. JS no requiere definir el tipo de dato con el que se trabaja porque lo interpreta dependiendo del valor que toma la variable. 

JavaScript tiene varios tipos de datos ***primitivos*** loc cuales referimos a continuación:

### **Boolean:** 
Representa valores lógicos verdadero o falso. No se trata de un valor en si mismo sino el valor que puede tomar esa variable de forma excluyente (por ejemplo en el caso de usar condicionales si algo está pagado Si/No, se podría entender con el uso de un booleano verdadero = si, falso = no)

Ejemplo:
```js
// Boolean
var truthy = true;
var notTruthy = false;

console.log(truthy);

// Resultado: => true
```
### **Null:** 
Representa un valor nulo o inexistente. Por ejemplo, en el caso de una página de registro o un cuestionario donde un dato no es obligatorio de cumplimentar y se deja en blanco para que el sistema no presente un error sino que interprete que este valor está simplemente vacío.

Ejemplo:
```js
// Null
var person = null;

console.log(person);

// Resultado: => null
```

### **Undefined:** 
Representa una variable sin valor asignado. Quiere decir que el valor de esa variable no existe o no se ha definido sino que simplemente se ha declarado sin asignarle valor alguno. Se puede entonces constatar durante la depuración de un programa (*debugging*) si una variable ha sido definida previamente o no y de ahí su utilidad.

Ejemplo:
```js
// Undefined
var notDefined;

console.log(notDefined);

// Resultado: => undefined
```

### **Number:** 
Representa números enteros y de punto flotante. 

Ejemplo:
```js
// Number
var age = 40;

console.log(age);

// Resultado: => 40
```

### **String:** 
Representa texto (palabras o frases) o cadena de caracteres. La sintaxis para escribir una cadena de caracteres es usando comillas simples o dobles entre la cadena o texto.  

Ejemplo:
```js
// String
 var name = "John";
 var nameTwo = 'Emmanuel';

 console.log(name);
 console.log(nameTwo);

 // Resultado: => John
 //            => Emmanuel
```
Es posible usar comillas dentro de una cadena, siempre y cuando no coincidan con las comillas que rodean la cadena:

Ejemplo:
```js
var nameThree = "He is called 'Johnny'";

 console.log(nameThree);

 // Resultado: => He is called 'Johnny'
```

### **Symbol:** 
Representa un identificador único e inmutable. Es similar al **String** pero con algunas reglas específicas, tienen un identificador único que no puede ser cambiado (inmutable).

Ejemplo:
```js
// Symbol
var mySym = Symbol("id");
console.log(mySym)

// Resultado: => id
```

> ## Los tipos de JavaScript son dinámicos 
> Esto significa que se puede utilizar la misma variable para contener diferentes tipos de datos. [W3schools](https://www.w3schools.com/js/js_datatypes.asp)

Ejemplo:
```js
let x;       // Ahora x es de tipo undefined
x = 5;       // Ahora x es de tipo Number
x = "John";  // Ahora x es de tipo String
```

También tiene tipos de ***datos no primitivos***:

### **Object:** 
Representa colecciones de datos y funcionalidades más complejas. La sintaxis para escribir objetos es poniendo los elementos entre llaves `{ }` y separado con coma cada elemento. Los elementos que componen el objeto suelen ser pares **clave : valor**. 

Ejemplo:
```js
const person = { firstName: "John", lastName: 'Vélez', age: 40, eyeColor: 'Brown' };
```

### **Array:** 
Representa listas ordenadas de valores. La sintaxis que emplea requiere el uso de corchete ` [ ]` separando los elementos de ese arreglo o lista por comas. Los arrays están indexados en el sistema enumerando el primer elemento como cero (*'zero-based index'*)

Ejemplo:
```js
let fruits = ["apple", "banana", "orange"];
```

### **Function:** 
Representa bloques reutilizables de código. 

Ejemplo:
```js
function greet() { console.log("Hello!"); }
```

# 3. ¿Cuáles son las tres funciones de String en JS?

En JavaScript un *'string'* en un objeto que representa una secuencia de caracteres. Como tal JS ofrece una serie de funciones que nos permiten manipular esa cadena de caracteres. JavaScript proporciona varios métodos y propiedades integrados para trabajar con cadenas.

Básicamente, **una función le permite encapsular el comportamiento**. En este caso, no somos nosotros quienes realmente creamos las funciones, éstas se proporcionan en la biblioteca principal de JavaScript, por lo que simplemente podemos llamarlas. Esencialmente, lo que vamos a poder hacer es tener un objeto y luego cambiarlo o realizar ciertos tipos de consultas de valor sobre él. Nos permiten por tanto realizar una tarea una y otra vez sin tener que repetir ningún código.

JavaScript proporciona una serie de métodos de cadenas para representar y manipular cadenas. Desde recuperar caracteres específicos con `charAt()`, convertir cadenas a mayúsculas con `toUpperCase()` hasta combinar cadenas con `concat()`, estos métodos simplifican una amplia gama de tareas para los desarrolladores. [geeksforgeeks/blog](https://www.geeksforgeeks.org/javascript-string-methods/)

Estos métodos incluyen entre otros:

![JS String Methods](https://miro.medium.com/v2/resize:fit:1024/1*meRP2JvPDj45IR_qRPSllw.jpeg)

Entre estas funciones generales se encuentran tres que son de gran utilidad: `concat()`, `slice()` y `replace()`

### **1. concat():** 
Combina el texto de dos cadenas (*'Strings*) y devuelve una nueva cadena combinada o unida que se puede almacenar a su vez en una variable distinta para su uso en diferentes partes del programa. 

Para concatenar dos cadenas, usamos el método `concat()` en un objeto de cadena y enviamos otro objeto de cadena como parámetro. Este método acepta un argumento. La variable contiene texto entre comillas dobles o comillas simples. 

Ejemplo:
```javascript
let greeting = "Hola";
let name = 'John';

let message = greeting.concat(" ", name, "!"); 

console.log(message);

//Resultado:"Hola John!"
```

El código inicializa dos cadenas, ***greeting*** y ***name***. Luego usa el método `concat()` en el objeto de cadena ***greeting***, pasando ***name*** como parámetro. El método concat() concatena la cadena *name* al final de *greeting* y la cadena resultante que hemos llamado *message* se imprime en la consola.

### **2.	slice():** 
Extrae una sección de una cadena y devuelve una nueva cadena. Extrae una parte de la cadena basándose en el índice inicial y el índice final que nosotros deseamos y devuelve una nueva cadena. Al igual que en el caso anterior, esta nueva cadena la podemos almacenar en una nueva variable para usarla posteriormente en el programa si así lo deseamos. Recordemos además que en JS el índice comienza en cero.

Ejemplo 1:
```js
let fruit = 'banana';
let slicedFruit = fruit.slice(2,5);

console.log(slicedFruit);

// Resultado: "nan"
```
El código inicializa una cadena ***fruit*** con el valor "banana". Luego utiliza el método `slice()` para extraer una subcadena que hemos nombrado como ***slicedFruit***, sobre el índice inicial de 2 y final igual a 5, especificados y los imprime individualmente. Teniendo en cuenta que el método no incluirá el caracter del índice final sino el inmediatamente anterior:

Debemos teber en cuenta los índices de la palabra "banana"

| b | a | n | a | n | a |
| --- | --- | --- | --- | --- | --- |
| 0 | 1 | 2 | 3 | 4 | 5 |

`slice(2,5)` incluirá desde el caracter 2 = n y hasta el anterior al 5, es decir el 4 = n.

Si en lugar de escribir en la función `slice(2,5)` dos índices escribo solo uno, JS interpretará que queremos seccionar el *String* desde ese índice hasta el final,

Ejemplo 2:
```js
var str = 'The quick brown fox jumped over the lazy dog';
let strTwo = str.slice(10);

console.log(strTwo);

// Resultado: "brown fox jumped over the lazy dog"
```
Como puede verse el resultado muestra todos los caracteres de la cadena comenzando en el índice 10 y hasta el final de la frase.

En este ejemplo debemos tener en cuenta que los espacios también cuentan como caracter cuando deseamos buscar un índice específico, en el caso de una frease como la que representa la variable que hemos llamado ***str*** el índice número 10 corresponde a la letra "b" de la palabra "brown" y el índice 0 es la letra "T" en la palabra "The".

También es posible usar valores negativos como índice en el método `slice()`, en ese caso lo que interpreta JS es que el conteo sobre el cual se va a ejecutar la sección del *'string'* comienza en el final de la secuencia de caracteres (frase en nuestro caso) y mostrará todos aquellos desde ese índice y hasta el final de la cadena.

Ejemplo 3:
```js
var str = 'The quick brown fox jumped over the lazy dog';
let strThree = str.slice(10);

console.log(strThree);

// Resultado: "lazy dog"
```


### **3.	replace():** 
Busca una cadena o una expresión regular y reemplaza con una nueva subcadena. La cadena original permanecerá sin cambios.

Ejemplo 1:
```js
let text = "I like Cats. Cats are cool.";
let newText = text.replace(/Cats/g, "Dogs");

console.log(newText);

//Resultado: "I like Dogs. Dogs are cool."
```

Ejemplo 2:

```js
let strFour = "Mind, Power, Soul";
let part = strFour.replace("Power", "Space");

console.log(part);

//Resultado: "Mind, Space, Soul"
```
El código inicializa una cadena ***strFour*** con el valor "Mind, Power, Soul". Utiliza el método `replace()` para reemplazar la primera aparición de la subcadena "Power" con "Space". La cadena modificada se almacena en la parte variable y luego se imprime en la consola.

## 4. ¿Qué es un condicional?

Los condicionales son estructuras de programación que permiten que el programa que estoy codificando se vuelva dinámico. Estas estructuras permiten dirigir el flujo de ejecución del programa en función de condiciones específicas o repetir un bloque de código múltiples veces [OpenWebinars](). Con programa dinámico queremos decir aquel tipo de programa que puede tomar decisiones basado en unos criterios que yo como programador impongo en mi código.

Los condicionales son simplemente una forma de decir que si ocurre una situación, quiero que mi programa realice una tarea concreta o se comporte de un modo determinado, pero si ocurre una situación diferente, realice otra tarea o genere una respuesta distinta. 

En este sentido es similar a una toma de decisiones que haríamos en nuestra vida cotidiana basadas en una condición, por ejemplo *“si sale el sol esta mañana, tomo mis cosas y voy a la playa, de lo contrario me quedaré en casa descansando”* la acción o respuesta está de este modo condicionada por lo que suceda en este caso concreto con el clima *“si sale el sol"*   entonces lo que haré como resultado *“voy a la playa”* de lo contrario mi comportamiento cambia y *“me quedaré en casa descansando”*. Las sentencias condicionales nos ayudan a controlar el flujo de nuestro programa, decidiendo si unas líneas de código se tienen que ejecutar en función de si se cumplen unas condiciones preestablecidas. Comprueban por tanto si una condición es verdadera o falsa para tomar o no cierta acción.

Los condicionales permiten ejecutar diferentes bloques de código según se cumpla o no una condición. En JavaScript tienen la siguiente sintaxis: Se parte declarando las variables (edad) y a continuación se crea el bloque *if* que incuye la condición, por ejemplo la mayoría de edad `if (age >= 18)` luego dentro de el bloque agrupado entre llaves `{ }` se codifica la condición **verdadera**, en el ejemplo en el caso de tener 18 o más años, cerramos con punto y coma **;**. Si la condición no se cumple y queremos añadir un comportamiento alternativo usamos el bque `else` y usando la misma sintaxis describimos ese comportamiento dentro de unas llaves terminando en punto y coma.

![JS conditionals](/images/JS_conditionals.webp)

Ejemplo:
```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//Resultado: "You are an adult."
```
En el ejemplo vemos que el valor que toma la variable `age`  es 18 y por tanto lo que debe resultar es que la persona es mayor de edad: *"You are an adult."*


## 5. ¿Qué es un operador ternario?

El operador ternario es una forma abreviada de escribir un condicional ***if/else*** de forma más compacta, se utiliza con frecuencia como atajo porque es más sencillo de asimilar y tiene menos líneas de código haciendo más entendible el programa. Sin embargo, hay que tener cuidado, porque su sobreutilización puede ser contraproducente y producir un código más difícil de leer.

Sintaxis:
Escribimos la condición seguida del signo de interrogación, a continuación dejamos un espacio y escribimos el bloque de respuesta verdadera, bloque ***if*** de la sintaxis habitual) seguido de dos puntos **:** y a continuación escribimos la confición falsa o bloque ***else***.

`Condición ? valorSiVerdadero : valorSiFalso;`


Ejemplo 1:
```js
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); 

// Resultado: "Yes"
```
En este ejemplo, si `age` es mayor o igual a 18, `canVote` se asignará "Yes", de lo contrario, se asignará "No".


Ejemplo 1:
```js
let nota = 7;
let calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

// Resultado: "Estoy" "aprobado"
```

## 6. ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Las funciones en cualquier lenguaje de programación son una parte fundamental de cómo organizamos nuestro código. JavaScript al ser un lenguaje dinámico tiene ciertos mecanismos para garantizar que la ejecución de nuestro código sea la más óptima y correcta.

En JavaScript tenemos dos maneras principales de definir funciones, como una declaración o como una expresión.

```js
// Declaraciones de función

// Función con nombre
function suma1(a, b) {
  return a + b
}

// Expresiones de función

// Función anónima
var suma2 = function(a, b) {
  return a + b
}
```

Las diferencias de sintaxis son claras, las expresiones de funciones principalmente están a la DERECHA del símbolo igual, y las declaraciones no lo tienen.

Declaración de función:
```js
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

Se declara usando la palabra clave function seguida del nombre de la función.
Puede ser llamada antes o después de su definición.

Expresión de función:
```js
let greet = function(name) {
  console.log("Hello, " + name + "!");
};
```
Se asigna una función anónima a una variable.

Debe ser llamada después de su definición.

La principal diferencia es que las declaraciones de función se "elevan" (*'hoisting'*) al inicio del ámbito, mientras que las expresiones de función siguen el flujo normal del código.

Cuando nuestro código JavaScript se ejecuta, **el intérprete mueve todas las declaraciones de nuestro programa al inicio**. Veamos un ejemplo: [Escuela Frontend](https://www.escuelafrontend.com/declaraciones-de-funciones-y-expresiones-de-funciones)

```js
var nombre = "Rick"
var apellido = "Sanchez"
function nombreCompleto(primero, segundo) {
  return `${primero} ${segundo}`
}
var pintarEdad = function (numero) {
  console.log(`la edad es de ${numero} años`)
}
```

En el bloque de código anterior podemos ver tanto **declaraciones de variables**, como **asignaciones de valores**; y ambas cosas pasan en momentos separados. 

El intérprete de JavaScript lo que realmente hace es **declarar todas las variables y funciones primero** antes de asignar y ejecutar cualquier otro valor. Si quisiéramos ver el orden real en el que se va ejecutando cada cosa, sería algo así:

```js
// Declaraciones primero
var nombre;
var apellido;
function nombreCompleto(primero, segundo) {
    return `${primero} ${segundo}`
}
var pintarEdad;

// Asignaciones después
nombre = "Rick"
apellido = "Sanchez"
pintarEdad = function(numero) {
    console.log(`la edad es de ${numero} años`)
```

A esta reorganización del llamado se le denomina ***Hoisting***. La **declaración** y la **inicialización** de una variable o función ocurren en momentos distintos, incluso cuando los escribes en la misma línea.

## 7. ¿Qué es la palabra clave "this" en JS?

En JavaScript, this hace referencia al objeto actual en el que se está ejecutando el código. El valor de this depende de cómo se invoca la función.

Algunas reglas para determinar el valor de ***'this'***:

**1.** En un método de objeto, `this` se refiere al objeto que contiene el método.

**2.** En una función normal, `this` se refiere al objeto global (en un navegador, window).

**3.** En una función en modo estricto (*'use strict'*), `this` es *'undefined'* en una función normal.

**4.** En un evento, `this` se refiere al elemento que dejecuta el evento.

**5.** Métodos como `call()`, `apply()` y `bind()` pueden establecer explícitamente el valor de this.

Ejemplo:
```js
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); 

//Resultado: "Hello, my name is John"
```

En este ejemplo, `this `dentro del método `greet()` hace referencia al objeto `person`, permitiendo acceder a la propiedad `name`.
