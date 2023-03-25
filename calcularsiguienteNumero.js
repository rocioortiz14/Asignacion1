 // Calcula el siguiente número en la secuencia
 function calcularSiguienteNumero(numero) {
    return numero % 2 === 0 ? numero / 2 : 3 * numero + 1;
  }