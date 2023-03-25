// Calcula la trayectoria de la nave y cuenta los saltos realizados
function calcularSaltos(numero) {
    let saltos = 0;
    const trayectoria = [];
  
    while (numero > 1) {
      saltos++;
      trayectoria.push(numero);
      numero = calcularSiguienteNumero(numero);
    }
  
    trayectoria.push(numero);
    trayectoria.push(`Se han dado ${saltos} saltos.`);
    trayectoria.push("La trayectoria de su nave ha sido trazada.");
  
    return trayectoria;
  }