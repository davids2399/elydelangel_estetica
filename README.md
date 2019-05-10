#David Alan Salazar Gonzalez 2753069
#Resumen de la aplicación:
La aplicación se divide en 3: la primera es una página web desarrollada en Angular, la cual su principal objetivo es el promover la marca y a la empresa. El sitio cuenta con 4 páginas: Inicio, Servicios, Productos y Contacto, y esta enfocada en que sea atractiva visualmente para que los clientes puedan navegar por el sitio y puedan encontrar lo que busquen de manera sencilla. La página está diseñada para que los clientes hagan su visita rápida, encuentren lo que buscan y se contacten con la sucursal, ya sea por teléfono o por Facebook. La segunda parte es una RestAPi, está desarrollada en NodeJS y con ayuda del framework de Express, la RestAPI ayuda a comunicar las 2 páginas con una base de datos, ya sea para leer, crear, actualizar o eliminar información desde cualquier lado. Y la tercera es una aplicación igualmente desarrollada en Angular 7, pero el propósito de esta aplicación no es estar en línea, si no con ayuda del framework de Electron, se busca que esta aplicación sea una aplicación de escritorio. El propósito de esta aplicación es tener un panel de administración en un ordenador, el cual nos permita hacer ediciones de la página web y mantener la página actualizada sin ayuda de un programador, además de poder administrar los clientes con los que cuenta la empresa.

Problema de la empresa: La empresa tiene 2 problemas: primeramente, no cuenta con una página web con la que puedan promocionar la marca de su negocio, lo cual hace que no puedan crecer rápidamente. Segundo, la mayoría de sus clientes actuales se comunican con la empresa a través de teléfono o Facebook, lo cual hace que la empresa tenga que hacer el registro de las citas de los clientes de manera manual y en lápiz y papel. 

Solución: La solución de mi sistema permite que los clientes ahora puedan conocer más de la empresa, y puedan darse de una idea del tipo de empresa que son y los productos que pueden ofrecerles a ellos como clientes, además de dar a conocer su ubicación para que los clientes puedan acudir al local y poder gozar de esos servicios. La página como función adicional, permite llevar un control de ofertas y promociones, la empresa publicaba a través de Facebook, sus productos recién llegados y las promociones de temporada, ahora igualmente podrán hacerlo en su página web desde la aplicación de escritorio sin ningún problema. 

Arquitectura: La arquitectura del sistema se divide en 4 bloques principales: Principalmente, una base de datos en MySql, que cuenta con 2 tablas, una de clientes y la otra de promociones. 2 Una aplicación de NodeJS, la cual hace de puente entre las aplicaciones y la base de datos, esta cuenta con todos los verbos (CRUD) para poder interactuar con la base de datos. 3 La aplicación de escritorio, el cual funge como panel de administración para poder añadir clientes y editar las promociones que se encuentran en la pagina web.
Requerimientos:
Contar con NodeJS y NPM para el manejo de librerias. Y un navegador para poder correr las aplicaciones. 
AngularCli 7.2.2 | NodeJS v10.15.0 | NPM 6.4.1 
Instalación:
¿Cómo instalar el ambiente de desarrollo?
Se instala NodeJS y NPM en la computadora a través de este link https://nodejs.org/en/download/ 
Una vez instalado Node y NPM, instalamos angular de manera global con ayuda de NPM https://angular.io/guide/quickstart 
Ya una vez instalados esas 2 cosas, ya podemos correr nuestro ambiente de desarrollo, es cuestión de ir a la carpeta donde descargamos el repositorio y correr el comando de ng serve y ya podremos verlo en nuestro navegador en localhost:4200
¿Cómo ejecutar pruebas manualmente?
Podemos realizar testing manualmente con ayuda de las librearías de angular (ng test) y con ayuda de su documentación. O podemos ayudarnos con algunas herramientas que se especializan en testing como Jasmine y Karma.
¿Cómo implementar la solución en producción en un ambiente local o en la nube como Heroku?
Tenemos 2 maneras para implementar las aplicaciones:
1. Si deseamos publicarla en algún servicio en línea , necesitamos contar con NodeJS, especialmente para que nuestra RestAPI pueda funcionar, de otra manera no la podríamos implementar. Si contamos con NodeJs en el servicio, simplemente sincronizamos el repositorio de Github o subimos la carpeta con todo el proyecto y el servicio se encargara de instalar las dependencias (npm install) y todo lo que necesiten nuestras aplicaciones. 
2. Si nuestro servicio no cuenta con NodeJS, aun así podemos subir lo que son la aplicación web y la aplicación de escritorio, simplemente las compilamos para producción con el comando ng build, seguido de --baseHref=baseHref, con este comando podremos estipular el dominio de la página web donde se encuentre nuestra aplicación. Sin embargo, tendremos que contratar de otro servicio que si nos permita tener la RestAPI en línea, si no nuestras aplicaciones no tendrán funcionalidad alguna. 
Configuración:
-	Configuración del producto (archivos de configuración).
con la ayuda del manejador de librerias NPM, los archivos de configuración necesarios para que la aplicación funcione y pueda mantener un estado de versión y todas las librearías funcionales , se encuentran en la carpeta base, los cuales son: angular.json , para que todo lo relacionado con la configuración de angular se encuentre bien, package.json, donde podremos encontrar todas las librerias utilizadas y sus respectivas versiones en producción y desarrollo.
-	Configuración de los requerimientos.
No necesita configuración adicional para la cobertura de requerimientos.
Uso:
-	Sección de referencia para usuario final. Manual que se hará referencia para usuarios finales.
Véase el video junto con la documentación en la primera mitad.
-	Sección de referencia para usuario administrador.
Véase el video junto con la documentación en la segunda mitad.
Contribución:
-	Guía de contribución para usuarios.
-	Debe contar con pasos específicos para clonar repositorio, crear un nuevo branch, enviar el pull request, esperar a hacer el merge.
1. git clone https://github.com/llWolfz/elydelangel_estetica -b develop
2. git checkout -b newbranch
3. 
 
Roadmap:
-	Requerimientos que se implementarán en un futuro.
Quedan pendientes las integraciones de Facebook e Instagram en las aplicaciones, ya que con los términos y condiciones de Facebook es un poco mas tardado el poder obtener todos los permisos para la aplicación. Además de que queda pendiente el panel para realizar las citas en la aplicación del cliente. 
Puedes ver las paginas en línea en:
Pagina web: https://llwolfz.github.io/elydelangel_estetica/  
Pagina de escritorio: https://llwolfz.github.io/elydelangel_estetica_desktop/ 
RestApi: no disponible, ya que github no cuenta con integración de nodejs
Youtube: video de comprobación: https://www.youtube.com/watch?v=z2ppaYNDIVE&feature=youtu.be 
