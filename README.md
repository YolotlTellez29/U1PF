Reconocimiento Facial con Face-API.js

Este proyecto utiliza la librería Face-API.js para realizar reconocimiento facial en tiempo real a través de la cámara web. Detecta caras, expresiones faciales, edad, género y puntos de referencia faciales, y muestra los resultados en un canvas superpuesto sobre el video.
Características

    Detección de caras: Detecta múltiples caras en tiempo real.

    Expresiones faciales: Identifica emociones como felicidad, tristeza, enojo, sorpresa, etc.

    Edad y género: Estima la edad y el género de las personas detectadas.

    Puntos de referencia faciales: Muestra 68 puntos de referencia en el rostro.

    Interfaz sencilla: Muestra el sentimiento detectado fuera del video.

Requisitos

    Navegador web moderno (Chrome, Firefox, Edge, etc.).

    Acceso a una cámara web.

Instalación

    Clona este repositorio:
    bash
    Copy

    git clone https://github.com/tuusuario/reconocimiento-facial.git

    Navega al directorio del proyecto:
    bash
    Copy

    cd reconocimiento-facial

    Abre el archivo index.html en tu navegador.

Uso

    Asegúrate de tener una cámara web conectada y permitir el acceso a la cámara cuando el navegador lo solicite.

    El video de la cámara se mostrará en la pantalla, y las detecciones faciales se superpondrán en tiempo real.

    El sentimiento detectado (expresión facial dominante) se mostrará debajo del video.

Estructura del Proyecto

    index.html: Contiene la estructura básica de la página web.

    style.css: Define los estilos para la página y el diseño.

    script.js: Implementa la lógica de reconocimiento facial usando Face-API.js.

    models/: Contiene los modelos preentrenados necesarios para Face-API.js.

Personalización

    Cambiar el intervalo de detección: Modifica el valor del intervalo en script.js (actualmente 100 ms) para ajustar la frecuencia de las detecciones.

    Agregar más funcionalidades: Puedes extender el proyecto para incluir más características de Face-API.js, como la detección de posturas o la identificación de personas.

Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, por favor:

    Haz un fork del repositorio.

    Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).

    Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

    Haz push a la rama (git push origin nueva-funcionalidad).

    Abre un Pull Request.

Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.
