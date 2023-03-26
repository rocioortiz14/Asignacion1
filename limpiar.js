  function limpiar() {
    const tabla = document.getElementById("tabla");
    const divMensaje = document.getElementById("mensaje");
  
    // Eliminar contenido de la tabla
    tabla.innerHTML = "";
  
    // Eliminar contenido del mensaje
    divMensaje.textContent = "";
  }