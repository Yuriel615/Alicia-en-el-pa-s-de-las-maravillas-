// Ejercicio 1: La poción mágica de Alicia (secuencial y condicional)

const ALTURA_PUERTA_CM = 40;
const POCION_MIN_ML = 1;
const POCION_MAX_ML = 80;
const ALTURA_MAX_CM = 250;

const formPocion = document.getElementById("form-pocion");

// Regla mágica: cada ml reduce 1 % de la altura inicial
function calcularNuevaAltura(alturaInicial, pocionMl) {
  const nueva = alturaInicial * (1 - pocionMl / 100);
  return Math.round(nueva * 100) / 100; // 2 decimales
}

function mostrarErrorPocion(texto) {
  document.getElementById("error-pocion").textContent = texto;
  document.getElementById("resultado-pocion").hidden = true;
}

formPocion.addEventListener("submit", function (event) {
  event.preventDefault();

  const textoAltura = document.getElementById("altura").value.trim();
  const textoPocion = document.getElementById("pocion-ml").value.trim();
  const altura = Number(textoAltura);
  const pocion = Number(textoPocion);

  // Validaciones
  if (textoAltura === "" || textoPocion === "") {
    mostrarErrorPocion("Corrige los datos: completa la altura y la poción.");
  } else if (isNaN(altura) || isNaN(pocion)) {
    mostrarErrorPocion("Corrige los datos: escribe solo números.");
  } else if (altura <= 0 || altura > ALTURA_MAX_CM) {
    mostrarErrorPocion(
      "Corrige los datos: la altura debe estar entre 1 y " +
        ALTURA_MAX_CM +
        " cm."
    );
  } else if (pocion < POCION_MIN_ML || pocion > POCION_MAX_ML) {
    mostrarErrorPocion(
      "Corrige los datos: la poción debe estar entre " +
        POCION_MIN_ML +
        " y " +
        POCION_MAX_ML +
        " ml."
    );
  } else {
    document.getElementById("error-pocion").textContent = "";

    const nuevaAltura = calcularNuevaAltura(altura, pocion);
    let mensaje;

    if (nuevaAltura < ALTURA_PUERTA_CM) {
      mensaje = "¡Alicia puede pasar por la puerta con espacio de sobra!";
    } else if (nuevaAltura === ALTURA_PUERTA_CM) {
      mensaje = "¡Alicia pasa justita, rozando la puerta!";
    } else {
      // ml necesarios para llegar a la puerta, redondeado hacia arriba
      const mlNecesarios = Math.ceil((1 - ALTURA_PUERTA_CM / altura) * 100);
      if (mlNecesarios > POCION_MAX_ML) {
        mensaje =
          "Alicia no puede pasar: ni con la dosis máxima de poción cabría.";
      } else {
        mensaje =
          "Alicia no puede pasar. Necesitaría al menos " +
          mlNecesarios +
          " ml de poción.";
      }
    }

    document.getElementById("res-altura-final").textContent =
      nuevaAltura + " cm";
    document.getElementById("res-mensaje-pocion").textContent = mensaje;
    document.getElementById("resultado-pocion").hidden = false;
  }
});

// Limpiar también los mensajes
formPocion.addEventListener("reset", function () {
  document.getElementById("error-pocion").textContent = "";
  document.getElementById("resultado-pocion").hidden = true;
});
