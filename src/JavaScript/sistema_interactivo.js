document.getElementById("datosPrimarios").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    // Validar que el nombre no contenga números
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        console.error("Error: El nombre no debe contener números.");
        alert("Error: El nombre no debe contener números.");
        return; // Salir de la función si hay un error
    }

    // Validar la edad
    if (isNaN(edad)) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        alert("Error: Por favor, ingresa una edad válida en números.");
    } else if (edad < 1 || edad > 130) {
        console.error("Error: La edad debe estar entre 1 y 130 años.");
        alert("Error: La edad debe estar entre 1 y 130 años.");
    } else if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando de tu vida!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en lo que te queda de vida!`);
    }

    // Mostrar los datos en el div de resultado
    let datos = `Nombre del cliente: ${nombre}<br>
                Edad del cliente: ${edad}<br>`;
    
    document.getElementById("resultado").innerHTML = datos;
    /* Esta función hace que el navegador diga en voz alta:
    Gracias por poner tus datos y el nombre digitado de la persona**/
    let mensaje = new SpeechSynthesisUtterance(`Gracias por poner tus datos, ${nombre}.`);
    window.speechSynthesis.speak(mensaje);

});
