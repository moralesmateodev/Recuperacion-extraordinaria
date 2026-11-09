document.addEventListener('DOMContentLoaded', () => {
    const saludoBtn = document.getElementById('saludoBtn');
    const mensajeSalida = document.getElementById('mensajeSalida');

    const mensajes = [
        "¡Excelente esfuerzo! El futuro del software está en tus manos, estudiante del INFRAMEN.",
        "La perseverancia y la lógica son las mejores herramientas de un programador.",
        "¡Mucho éxito en tu recuperación extraordinaria este lunes 09 de noviembre!",
        "Programar no es solo escribir código, es resolver problemas del mundo real."
    ];

    saludoBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * mensajes.length);
        mensajeSalida.textContent = mensajes[randomIndex];
    });
});