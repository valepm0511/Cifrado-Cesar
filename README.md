# Cifrado César

Cifrado Cesar es una app que permite cifrar un mensaje con un numero de desplazamiento a elección y decifrar con el mismo numero de cifrado 😎.

## Objetivo

Crear una estructura en HTML y CSS con una Logica en JS que permita cifrar un mensaje con un offset y que devuelva el resultado en pantalla y que a su vez permita decifrar el mismo mensaje con el mismo offset. 

## Requerimientos

* Hacer uso de "let", "const" y "arrow function".

* No utilizar framework.

* No utilizar pseudo-variable "This".

* Implementar el codigo en los archivos correspondiente ("index.html = estructura app","style.css = estilo app","index.js = logica manejo del DOM","cipher.js = logica del cifrado").

* pasar los 5 Test (npm test).


## Prodecimiento

1- aplicar charCodeAt para devolver indice del caracter

2- aplicar String.FromCharCode para devolver el valor del caracter en ASCII

3- aplicar formula "cifrado cesar" en la logica parar que devuelva el texto cifrado/decifrado


## Intrucciónes de uso

1- clonar repositorio "scl-2018-05-bc-core-am" ingresa [Aquí] https://github.com/valepm0511/scl-2018-05-bc-core-am

2- abrir el archivo index.html la ruta "scl-2018-05-bc-core-am/src/index.html"


##Para Cifrar:

* ingresar texto a cifrar (no escribir Ñ, numeros ni signos de puntuación).

* elegir un offset de desplazamiento.

* oprime boton "codifica tu mensaje".

* recibe tu mensaje codificado.

* oprime boton "limpiar" para refrescar y volver a utilizar.


**Para Decifrar**:

* ingresar texto a decifrar.

* elegir un offset de desplazamiento (el mismo que se utilizo para codificar).

* oprime boton "decodifica tu mensaje".

* recibe tu mensaje decodificado.

* oprime boton "limpiar" para refrescar y volver a utilizar.






