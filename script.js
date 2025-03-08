const elVideo = document.getElementById('video');
const sentimentDiv = document.getElementById('sentiment'); // aquí hago regerencia al div de sentimiento

navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

// pido uso de la camara
const cargarCamera = () => {
    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        stream => elVideo.srcObject = stream,
        console.error
    )
}

// aquí cargo los modelos
Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
]).then(cargarCamera);

elVideo.addEventListener('play', async () => {
    // Crear el canvas con los elementos del face api
    const canvas = faceapi.createCanvasFromMedia(elVideo);
    // Añadirlo al body
    document.body.append(canvas);
    // Tamaño del canvas
    const displaySize = { width: elVideo.width, height: elVideo.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
        // Hacer las detecciones de cara
        const detections = await faceapi.detectAllFaces(elVideo)
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();
        // Poner en su sitio
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        // Limpiar canvas
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar las líneas
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        resizedDetections.forEach(detection => {
            const box = detection.detection.box;
            new faceapi.draw.DrawBox(box, {
                label: Math.round(detection.age) + ' años ' + detection.gender
            }).draw(canvas);
        });

        // Mostrar el sentimiento en el div
        if (detections.length > 0) {
            const expressions = detections[0].expressions;
            const dominantExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
            sentimentDiv.textContent = `Sentimiento: ${dominantExpression}`;
        } else {
            sentimentDiv.textContent = 'Sentimiento: No detectado';
        }
    }, 100); // Añado un intervalo de 100ms para las detecciones
});