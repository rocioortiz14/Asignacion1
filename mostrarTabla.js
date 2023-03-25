 // Muestra los resultados en una tabla
 function mostrarTabla(saltos) {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
  
    const encabezado = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Número";
    encabezado.appendChild(th1);
    const th2 = document.createElement("th");
    th2.textContent = "Resultado";
    encabezado.appendChild(th2);
    tabla.appendChild(encabezado);
  
    saltos.forEach((salto) => {
      const fila = document.createElement("tr");
      const numero = document.createElement("td");
      numero.textContent = salto;
      fila.appendChild(numero);
  
      const valor = document.createElement("td");
      valor.textContent = isNaN(salto)
        ? salto
        : salto.toLocaleString();
      fila.appendChild(valor);
  
      tabla.appendChild(fila);
    });
  
    mostrarMensaje(saltos[saltos.length - 1]);
  }