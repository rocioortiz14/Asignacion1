function procesarNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    
    if (esNumeroValido(numero)) {
      const saltos = calcularSaltos(numero);
      mostrarTabla(saltos);
    } else {
      mostrarMensaje("El número debe ser mayor que 10000.");
    }
  }
  