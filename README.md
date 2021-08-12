
Fundamentos de Ingeniería de Software – Obligatorio 2

https://github.com/ORT-FIS-202008/obligatorio2-begino-lombardi-tironi

M4D – Docente: Alejandro Adorjan

Sofía Begino (230763), María Clara Lombardi (238341), Valentina Tironi (241109)

23/11/20

# Indice
1. Objetivo 
2. Organización 
    1. Repositorio y Versionado
    2. Reuniones 
    3. Jira
3. Tecnologías utilizadas
    1. NodeJS
    2. MongoDB
    3. EJS
    4. JQuery
    5. Otras librerías
4. Calidad de Código
5. Prueba Unitaria
6. Interfaz de usuario 
    1. Uso de Formularios 
    2. Usabilidad 
7. Construcción
8. Testing funcional 
9. Reporte de defectos 
    1. Registro de Issues
    2. Análisis crítico de la calidad del software 
10. Trabajo individual 
11. Defensa 
    1. Técnicas aplicadas 
    2. Reflexiones 

#  Objetivo
En este documento se presentan los procesos llevados a cabo para desarrollar un producto de software que cumpla con las necesidades pautadas en la letra del obligatorio. Esto incluye las técnicas de desarrollo, organización y testing. 

# Organización

## Repositorio y Versionado
Creamos un [repositorio] privado en GitHub. En el archivo Readme redactamos la documentación.

Dividimos las tareas según las funcionalidades a desarrollar y la persona que la estaba desarrollando. Entonces cada una de las otras iba creando varias branches desde main para luego revisar los cambios y mergear en los casos que corresponda.

![pull request](imagenes_documentacion/pull_request.png?raw=true)

## Tecnologías utilizadas

### NodeJS
Elegimos NodeJS como tecnologia lider en nuestro proyecto, por la facilidad que maneja la misma a la hora de hacer un simple CRUD (Create - Read - Update - Delete). Además, Node es una herramienta altamente utilizada en la actualidad y queriamos tener un acercamiento al mismo, para entender y conocer una herramienta innovadora y muy usada como esta. 

Usamos Express, un framework para node que facilita varias necesidades bastante comunes que se presentan en aplicaciones de este tipo.

### MongoDB
Creamos una base de datos a través de la tecnología MongoDB. Hicimos esto para poder probar las funcionalidades con mayor facilidad y mantener persistencia de forma segura y actualizada entre todos los integrantes del equipo. 

Creamos cada documento (objecto - tupla) de la base de datos en base a un modelo que contiene la información de cada capítulo. Agregamos, modificamos y eliminamos capítulos para probar las funcionalidades del sistema. También la utilizamos para almacenar y modificar la información del perfil del usuario.

Para el manejo de Mongo, utilizamos [mongoose](https://mongoosejs.com/docs/index.html).

### EJS
Para poder mostrar la información en el front end, usamos [EJS](https://ejs.co/). EJS es un template simple que permite mezclar HTML con JavaScript. Desde el back enviabamos la información y en el archivo ejs lo mostramos.

### JQuery
Para el javascript corriendo en el navegador, utilizamos Jquery. Con el hicimos las request necesarias usando AJAX, y controlamos eventos en el DOM.

### Otras librerias
- Usamos [SweetAlert](https://sweetalert2.github.io/) para los modales de error y success. 
- [VexFlow 2](https://ourcodeworld.com/articles/read/293/rendering-music-notation-music-sheet-in-javascript-with-vexflow-2) fue utilizada para la muestra de las tablaturas.

## Reuniones
Decidimos realizar reuniones por Zoom con el propósito de organizarnos y dividir tareas. 

Además nos juntamos presencialmente en múltiples instancias. Nos pareció que esto fue útil principalmente para la parte de programación de BackEnd, ya que esto facilitó la cooperación y evitó que nos trancaramos en varias tareas complejas.

## Jira 
Utilizamos la plataforma Jira para dividir las tareas. Fuimos creando tickets específicos con las tareas a realizar (tanto para la parte de desarrollo como la de testing y documentación).

Consideramos que esto fue muy útil y que permitió que la comunicación entre el equipo fuera buena. La herramienta nos dejaba ver sobre cuáles procesos estabamos trabajando, los que ya habíamos terminado y los que todavía no habíamos empezado. 

A continuación incluimos un ejemplo de esta división de tareas.

![jira](imagenes_documentacion/jira.png?raw=true)

# Calidad de Código
En nuestro proyecto buscamos cumplir con diversos estándares de programación y asegurar una buena calidad de código. Para hacer esto consideramos distintos aspectos.

**Indentación y agrupamiento:**
Para asegurar este estándar utilizamos el analizador estático de código esLint. Todas nos lo bajamos para indentar el código a medida que programábamos. 
Además, separamos fragmentos de código que realizan distintas subtareas dentro de una misma función para mejorar la legibilidad del código. 

**Naming:**
Tratamos de usar nombres nemotécnicos para asegurar la legibilidad del código. Además, buscamos ser consistentes en el uso de los nombres.

Decidimos nombrar todo lo que el usuario ve en español (p. ej. títulos) ya que orientamos nuestro proyecto a usuarios hispanohablantes. Por otra parte, mantuvimos todo lo oculto al usuario (p. ej. los nombres de las variables en el backEnd) en inglés para mantener el estándar recomendado.

**Simplicidad:**
Tratamos de hacer funciones cortas y legibles. Además, evitamos código innecesario o repetido. Esto ayudó a que todas pudiéramos entender la totalidad del código con mayor facilidad.

**Estructura de directorio y nombres de archivo:**
Organizamos las carpetas en función del propósito que cumple cada una en el proyecto en total. Esta organización hizo más fácil encontrar archivos. 

La estructura es la siguiente:

* models: En esta carpeta se guardan las clases (modelos). Tenemos un modelo Chapter y otro Student.
* routers: Acá se plantea la separacion de los endpoints en base a quien pertenecen. Hay un router para chapters y otro para student.
* utils: Archivos de utilidad. En este caso solo contamos con la conexión a la base de datos. 
* views: Vistas y assets (imagenes, scripts, styles). 
* tests: Tests.
* root: Archivos como server, app, package.json.

![estructura](imagenes_documentacion/dir-structure.png?raw=true)

# Pruebas unitarias
Utilizamos Jest para la creación de pruebas unitarias. Hasta el momento se pudieron hacer pruebas para el archivo app.js, probar que renderice de forma correcta lo esperado cambiando las rutas, etc. 

Y otro para chapters, se hizo de forma completa el test para crear un chapter, viendo cada posible caso. 

No hubo forma de poder terminar todos los tests, pero se dejaron listas las firmas hechas para que el camino de los mismos ya quede marcado, con el fin de facilitar su creación al próximo avance. 

Con el fin de no intervenir en la base de datos de producción, se creó una base de datos exclusiva para los tests. El cambio entre una y la otra, la definimos con una variable env.

Para correr las pruebas, ejecutar el siguiente comando:

```
npm test
```

# Interfaz de Usuario

## Uso de Formularios 

No usamos los forms de la manera que se espera porque esto hacía que la página se recargue y nosotras no buscábamos ese comportamiento. Para resolver esto, hicimos uso de Ajax. Al darle al botón de submit, obtenemos los datos de los inputs, procesando la información antes para adaptarla a la estructura marcada en mongo.

Además, de esta forma, teniamos mas control sobre qué mostrar al usuario, mensajes de error / éxitos, y/o eventos en el DOM.

## Usabilidad

**1. Visibilidad del estado del sistema**

Todas las ventanas tienen un título que indica en que sección se encuentra el usuario. 
También mantenemos un esquema de colores distinto para los profesores y los alumnos. Esto ayuda al usuario a visualizar rápidamente “dónde está parado”.
 
**2. Adecuación entre el sistema y el mundo real**

Buscamos que el lenguaje se asemejara lo máximo posible al del mundo real. Un ejemplo podría ser la decisión de utilizar símbolos en los botones. El botón de borrar tiene una basura, típicamente asociada con esta función. Por otra parte, el de ir hacia atrás tiene una flecha apuntando en esta dirección. 

**3. Libertad y control por el usuario**

El usuario puede ir hacia atrás para seleccionar otra opción y, en el caso de la creación de capítulos, tiene la opción de eliminar y modificarlos. Esto permite que deshaga cambios fácilmente.
 
**4. Consistencia y estándares** 

Tratamos de ser lo más consistente posibles en el uso de los estilos. Además, buscamos que la interfaz fuera lo más intuitiva posible. Por ejemplo, todas las pantallas contienen un botón que le permite ir hacia atrás, colocado a la izquierda de la página. 

**5. Prevención de errores** 

Validamos los datos ingresados por el profesor de forma de que no agregue el capítulo nuevo si este no contiene los campos requeridos. Lo mismo aplica para la modificación de los mismos.

**6. Reconocer mejor que recordar** 

El Profesor (quien tiene para elegir entre varias opciones en el sistema) puede acceder a un dashboard. Este contiene todos los capítulos creados. De esta forma puede visualizar sus cambios más recientes. 

 
**7. Flexibilidad y eficiencia de uso** 

Ya que cambiar de una funcionalidad a otra solo implica un par de clicks por parte del usuario (en el botón de retroceso) consideramos que el uso es bastante eficiente, por lo que no incluimos un menú de navegación o una barra lateral. 

**8. Estética y diseño minimalista** 

Elegimos un diseño con cards y formularios para hacer que el usuario pueda visualizar más fácilmente lo que tiene que hacer para usar la interfaz.

**9. Ayudar a los usuarios a reconocer, diagnosticar y solucionar los errores** 

Validamos que el usuario ingrese todos los datos requeridos y además incluimos mensajes de error informativos y estéticos. 

**10. Ayuda y documentación**

Consideramos que la mayoría del sistema es lo suficientemente intuitivo de forma de que no hace falta proporcionar más información. 

Incluimos un botón de ayuda en la sección de la tablatura. El usuario debe 

# Construcción
## Build: Pasos para inicar el proyecto

1. Correr el siguiente comando en la carpeta del repo
```
npm install
```
2. Ahora, tienen que setear las [env](https://www.npmjs.com/package/dotenv) (variables de entorno) para poder conectarse a la base de datos. 

```
touch .env
```

Ahi deben poner lo siguiente:

```
DB_USER=fis-team
DB_PASS=ort2019
DB_NAME=fis-obligatorio2
```
> Importante: Esto NO se hace. Publicar las env NO es una buena práctica, deja vunerable información valiosa del proyecto. En este caso lo ponemos porque es un obligatorio de facultad y el profesor las necesita para correr el mismo.


3. Para levantar el server, correr

```
npm start
```
Está instalado [nodemon](https://www.npmjs.com/package/nodemon), por lo que cuando se guarde algun cambio, el server instántaneamente se va a reinciar, asi que no es necesario hacerlo manualmente. El reinicio de página no es automatico.

4. Para abrir el proyecto en chrome, poner lo siguiente en una tab nueva:
```
http://localhost:3000/
```

En el archivo package.json se definen los demás puntos importantes del proyecto.


# Testing Funcional
Para la parte de testing realizamos pruebas exploratorias. Al ser una técnica de black box testing, realizamos esto iniciando el proyecto y ejecutando las pruebas previamente planteadas.

Para documentar este proceso construimos una tabla en excel que detalla distintos aspectos. Entre ellos: las pruebas, sus resultados esperados, el resultado de la prueba y, en los casos que fallan, el error encontrado. Este documento puede ser encontrado en la carpeta de testing funcional en el repositorio.

A su vez documentamos estos errores, como será explicado en la siguiente sección.

### Sesiones de Testing

Pensamos y escribimos los casos de prueba el 20/11. Durante el 21/11 realizamos la gran mayoría de las pruebas, dividiendolas entre las tres. Terminamos las pruebas el 22/11, tras haber agregado algunas funcionalidades menores al proyecto.

# Reporte de Defectos

## Registro de Issues
Registramos los issues a través de la herramienta de GitHub siguiendo un formato muy parecido al dado en clase. 

Incluimos el resumen en el título del issue.

Dentro del comentario incluimos los siguientes campos:
* Descripción
* Plataforma
* Severidad
* Prioridad
* Pasos a reproducir
* Resultado actual
* Resultado esperado
* Adjunto

Además registramos a qué caso/s de prueba (del testing exploratorio) corresponde el issue. 

También agregamos labels para ayudarnos a identificar con mayor facilidad el tipo de problema y, en determinados casos, un área de particular dificultad dentro del proyecto (p. ej. el manejo de la tablatura). 

Los issues creados pueden ser encontrados en la sección de issues de este repositorio.


![registro de issues](imagenes_documentacion/reporte_issues.png?raw=true)

## Análisis crítico de la calidad del software

Consideramos que nuestro proyecto **cumple con las necesidades pautadas** por la letra del obligatorio. El proyecto gira en torno a la visualización, creación, modificación y eliminación de capítulos (CRUD). Estas funciones son realizadas en parte por alumnos (visualización) y profesor (creación, modificación y eliminación). Entonces, un alumno puede avanzar con sus lecciones de guitarra que son, en determinada medida, dadas por un profesor. De esta forma, cumplimos con el objetivo principal del proyecto.

En cuanto al contenido de estas clases, consideramos que los campos proporcionados le permiten al profesor transmitir su conocimiento adecuadamente. En particular, consideramos que los resultados obtenidos con respecto al manejo de la tablatura fueron muy buenos. Queríamos incluir una tablatura que indicara exactamente cómo tocar cada nota. Otras librerías que evaluamos usar mostraban partituras, algo que consideramos que no es tan fácil de interpretar si recién estás empezando a tocar la guitarra. Esto tampoco se adecuaría exactamente con los requistos pautados. Además, pensamos que la forma de ingresar cada nota es amigable para el profesor. 

Otra funcionalidad importante que incluimos fue la visualización/creación/modificación del perfil del alumno. El alumno puede acceder a este desde su dashboard, siendo capaz de manejar su información.  

Todas le dedicamos tiempo a este proyecto y estamos contentas de haber logrado nuestros resultados. A pesar de esto, estamos presentando el **MVP**. Una primera versión que podría ser mejorada a futuro. 

Hay diversos aspectos que **nos hubiera gustado mejorar para esta versión** pero que, por restricciones de tiempo por parte de las tres, no fue posible. 

Una de ellas es la falta de algunas validaciones. Algunas de ellas fueron documentadas en los issues del proyecto (p. ej. los valores fuera de rango para la edad de un estudiante). Estos quedaron sin resolver ya que consideramos que su prioridad era menor que la de otros. Pero incluso podríamos incluir otras aún más específicas para asegurar la completitud y la calidad del contenido de los campos de los capítulos. Por ejemplo, podríamos hacer que, si un profesor ingresó notas a la tablatura, se vuelva obligatorio ingresar el nombre de la canción (y viceversa).  

Otro aspecto que mejoraría la calidad de nuestro código sería añadir comentarios a este. Aunque la comunicación entre el equipo fue clara durante todo el proceso, consideramos que haber añadido comentarios nos hubiera ayudado a entender determinadas cosas con mayor rapidez. 

Por otra parte, nos hubiera gustado incluir más tests unitarios. Aunque consideramos que el funcionamiento de nuestras funcionalidades es, en su mayoría, satisfactorio, nos hubiera gustado probar exhaustivamente todas estas.

También hemos tenido varias ideas sobre lo que podría ser agregado para una **siguiente versión**.  

Se nos ocurrió que agregarle el audio de la canción a tocar al capítulo podría mejorar la experiencia del alumno. Este podría ser ingresado por el profesor o autogenerado a partir de la tablatura. Una alternativa a esto podría ser incluir un video del profesor tocando la canción, mostrando cómo coloca las manos y permitiéndole al alumno escuchar cómo debería sonar esta.

También consideramos que el perfil del alumno podría ser expandido en muchas formas. Dado que nuestro proyecto ya le permite al alumno marcar una clase como “completada”, el perfil podría mostrar que porcentaje de las clases ha completado, de forma de motivarlo a avanzar. Esto se vincularía con el campo de “nivel” incluido en el perfil. Cada determinada cantidad de capítulos completados, el usuario podría subir de nivel. También podría mostrar otras estadísticas. Por ejemplo, cuánto le llevo completar cada capítulo.

Finalmente, podríamos agregarle fotos a la interfaz para hacerla más atractiva para niños chicos. Una alternativa a esto podría ser dejar que el profesor suba fotos para cada capítulo. De esta forma, las fotos podrían estar vinculadas con el tema del capítulo.

# Trabajo Individual 

Todas estuvimos involucradas en todas las principales del proyecto. A pesar de esto, cada una tuvo un área en la que se enfocó más. Sofía se centró en la parte de FrontEnd, Clara en la parte de documentación e investigación y Valentina en la parte de BackEnd.

Trabajamos juntas presencialmente en particular al comenzar el proyecto. Además, todas contribuimos en el proceso de testing de forma equitativa. 

# Defensa

## Técnicas Aplicadas

Utilizamos diversas técnicas y herramientas de ingeniería de software en este proyecto. A continuación, detallamos algunas de ellas.

### Software Configuration Management

Tal como en el obligatorio pasado, utilizamos la herramienta git para poder colaborar todas en el mismo proyecto de una forma ordenada. Esta herramienta nos permitió ver quién hizo los últimos cambios, qué cambió, dónde lo hizo, entre otros aspectos. Además, nos dio la posibilidad de acceder a versiones anteriores de ser necesario.

En este obligatorio también hicimos uso de la sección de issues y de pull requests, como fue explicado en secciones anteriores.    
Consideramos que esta herramienta fue esencial en para realizar este proyecto ya que nos permitió asegurar los siguientes tres pilares del desarrollo de software:
•	Completidud
•	Correctitud
•	Consistencia

### Software Process Model

Basándonos en nuestra experiencia con el primer obligatorio de esta materia, decidimos utilizar metodologías agiles para realizar este proyecto. Nos basamos principalmente en la flexibilidad y rapidez que estas permiten.  

Concretamente, decidimos utilizar el método **Kanban**.  En el obligatorio pasado 
habíamos usado SCRUM, pero consideramos que Kanban se adecuaba mejor a nuestras necesidades en este caso.  

Esto se debe a que este obligatorio tenía mucho mayor libertad creativa y a que involucra el trabajo con muchas nuevas tecnologías. Por ende, requeríamos un gran nivel de flexibilidad, en el cual, pudiéramos realizar modificaciones en el flujo del proceso en cualquier momento y aún así mantener la organización.

El hecho de realizar entregas continuas también nos permitió avanzar más rápidamente en un principio. Esta técnica también nos permitió visualizar nuestro trabajo, ya que se basa en el uso de un tablero de Kanban. Utilizamos Jira para crear este tablero (como fue especificado en el área de organización). 

Para hacer esto, comenzamos por definir los tickets en función de los aspectos básicos del proyecto. A medida que íbamos avanzando, fuimos creando más tickets. Estos luego fueron asignados a cada una de nosotras. Separamos el tablero en “para hacer”, “en proceso” y “completado” y fuimos posicionando a cada ticket en su columna correspondiente a medida que avanzábamos. También especificamos la prioridad y el grado de dificultad, de forma de llegar a un producto, más o menos viable, más rápidamente. 

Al poder visualizar nuestro trabajo, supimos manejar mejor nuestro tiempo (el cual nos resulto escaso en esta ocasión). Consideramos que el uso de esta herramienta además mejoró nuestro flujo de trabajo.

A pesar de no haber realizado sprints como en SCRUM, fijamos **weekly meetings**. Esto no fue tanto para revisar nuestro proceso como la vez pasada y más si para ayudarnos mutuamente y aprender juntas sobre el uso de las nuevas tecnologías.

### Lluvia de ideas y prototipos

Como los requerimientos del obligatorio no eran muy específicos, comenzamos haciendo una **lluvia de ideas** de lo que considerábamos esencial para el proyecto. 

Rápidamente llegamos al diseño básico mencionado anteriormente (sistema de capítulos). Para definir más exactamente lo que queríamos, discutimos sobre lo que era esencial para cada uno de esos hasta llegar a los campos utilizados. 

Además, realizamos **prototipos a mano** para todas las vistas. Hicimos esto para ahorrarnos trabajo a la hora de hacer el HTML/CSS y aseguraros de que todas estuviéramos satisfechas con el resultado final. 

### Pruebas Unitarias

Como fue mencionado en su sección, realizamos pruebas unitarias para asegurar el funcionamiento aislado de las funcionalidades más importantes del programa. A pesar de no haber podido realizar todas las pruebas deseadas, consideramos que estas fueron valiosas a nuestro proyecto. Principalmente porque nos permitieron probar nuestras funcionalidades independientemente de la interfaz. 

### Pruebas Exploratorias
También realizamos pruebas exploratorias. La idea con estas era “ir explorando” manualmente el programa, verificando que el curso normal de este funcionara correctamente y tratando de identificar áreas que podrían ocasionar problemas. 

Comenzamos ideando los casos de prueba. Para redactar estos, definimos una serie de características que nos pareció relevante documentar. Estas son las columnas de la tabla de pruebas en la capeta de testing exploratorio. 

Consideramos que estas pruebas también fueron valiosas ya que nos permitieron identificar defectos más bien asociados al vínculo entre la lógica del programa y los componentes visuales de la interfaz.  

## Reflexión 

Hay muchos aspectos que consideramos positivos de este proyecto. Entre ellos distinguimos el hecho de que este se sintió como un proyecto más “real”, cercano a lo que podríamos hacer fuera de facultad. Pensamos esto debido a que utilizamos diversas tecnologías modernas que se utilizan en el mundo de la tecnología actualmente. También tratamos de ser más organizadas, usando metodologías ágiles comúnmente usadas en empresas de software. 

También nos pareció bueno sentirnos desafiadas por el proyecto. Pensamos que la dificultad de este es mayor a otros anteriores y se nos presentaron diversos obstáculos durante el proceso. Algunos pudimos resolverlos y otros no. De todas formas, consideramos que pudimos aprender mucho de nuestros errores y estamos orgullosas de nuestro trabajo. Nos sentimos extrañas en no poder completar todos los aspectos del proyecto que nos gustaría por factores externos a nosotras. Sin embargo, entendemos que esto nos va a pasar en la vida real y que hay que aprender a manejarlo. 

Una de las dificultades que se nos presentó fue que teníamos distintos niveles de conocimiento y puntos de vista sobre las tecnologías y técnicas a utilizar. Por ejemplo, al pensar en la persistencia Clara pensó en usar archivos mientras que Sofía y Valentina estaban más acostumbradas al uso de bases de datos. Luego de debatir qué enfoque tomar, decidimos hacer uso de MongoDB. En un principio esto pareció ser un desafío para Clara, y en parte también para Sofía (quien no estaba familiarizada con MongoDB) pero terminó resultando bastante intuitivo. Al final, todas terminamos contentas de haber usado bases de datos ya que terminó siendo la opción más adecuada para el proyecto y resultando en una experiencia educativa. El usar jest también nos gustó por este mismo motivo. En particular porque ninguna sabía nada de esta tecnología.

Adicionalmente, apreciamos poder haber aplicado conocimientos aprendidos en otros semestres de facultad (p. ej. JS, HTML y CSS) en un proyecto de mayor complejidad. Además de darnos otra perspectiva para estos temas, nos ayudó a “repasar” el uso de estas tecnologías. 

Finalmente, el aspecto que consideramos más importante de este proyecto es el haber podido seguir desarrollando nuestras habilidades blandas. En particular, desarrollamos nuestro trabajo en equipo, ayudándonos entre si a aprender y colaborando para avanzar de forma eficiente y eficaz. Además, trabajamos en nuestras habilidades de comunicación. Consideramos que la comunicación fue muy buena y el hecho de haber trabajado juntas antes nos ayudó en este sentido. Nos gusta nuestra dinámica de trabajo y sentimos que mejoramos en este aspecto frente al obligatorio anterior.
