 
  // Muestra un mensaje en pantalla
  function mostrarMensaje(mensaje) {
    const divMensaje = document.getElementById("mensaje");
    divMensaje.textContent = mensaje;
    divMensaje.className = "mensaje";
  }