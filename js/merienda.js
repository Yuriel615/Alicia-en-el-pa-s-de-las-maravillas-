// Ejercicio 2: La merienda del Sombrerero Loco (switch y condicional)

const MAX_TAZAS = 20;
const TAZAS_PARA_DESCUENTO = 5;
const PORCENTAJE_DESCUENTO = 10;

const formMerienda = document.getElementById("form-merienda");

// Devuelve el precio unitario según la bebida (switch)
function obtenerPrecio(bebida) {
  let precio;
  switch (bebida) {
    case "te":
      precio = 3.5;
      break;
    case "cafe":
      precio = 4;
      break;
    case "chocolate":
      precio = 5;
      break;
    case "limonada":
      precio = 3;
      break;
    default:
      precio = null; // bebida no válida
  }
  return precio;
}

function mostrarErrorMerienda(texto) {
  document.getElementById("error-merienda").textContent = texto;
  document.getElementById("resultado-merienda").hidden = true;
}

formMerienda.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const selectBebida = document.getElementById("bebida");
  const bebida = selectBebida.value;
  const textoTazas = document.getElementById("tazas").value.trim();
  const tazas = Number(textoTazas);

  const precioUnitario = obtenerPrecio(bebida);

  if (nombre === "") {
    mostrarErrorMerienda("Escribe el nombre del invitado.");
  } else if (precioUnitario === null) {
    mostrarErrorMerienda("Elige una bebida de la lista.");
  } else if (textoTazas === "" || isNaN(tazas) || !Number.isInteger(tazas)) {
    mostrarErrorMerienda("La cantidad de tazas debe ser un número entero.");
  } else if (tazas < 1 || tazas > MAX_TAZAS) {
    mostrarErrorMerienda("La cantidad debe estar entre 1 y " + MAX_TAZAS + " tazas.");
  } else {
    document.getElementById("error-merienda").textContent = "";

    const subtotal = precioUnitario * tazas;
    let descuento = 0;
    if (tazas >= TAZAS_PARA_DESCUENTO) {
      descuento = subtotal * PORCENTAJE_DESCUENTO / 100;
    }
    const total = subtotal - descuento;
    const nombreBebida = selectBebida.options[selectBebida.selectedIndex].text;

    document.getElementById("res-nombre").textContent = nombre;
    document.getElementById("res-bebida").textContent = nombreBebida;
    document.getElementById("res-cantidad").textContent = tazas;
    document.getElementById("res-precio").textContent = "$" + precioUnitario.toFixed(2);
    document.getElementById("res-subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("res-descuento").textContent =
      descuento > 0 ? "$" + descuento.toFixed(2) + " (" + PORCENTAJE_DESCUENTO + " %)" : "Sin descuento";
    document.getElementById("res-total").textContent = "$" + total.toFixed(2);
    document.getElementById("resultado-merienda").hidden = false;
  }
});

formMerienda.addEventListener("reset", function () {
  document.getElementById("error-merienda").textContent = "";
  document.getElementById("resultado-merienda").hidden = true;
});
