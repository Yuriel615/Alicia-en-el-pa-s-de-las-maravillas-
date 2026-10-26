// Ejercicio 3: El desafío de la Reina de Corazones (for y condicional)

const MAX_CARTAS = 100;

const formReina = document.getElementById("form-reina");

function mostrarErrorReina(texto) {
  document.getElementById("error-reina").textContent = texto;
  document.getElementById("resultado-reina").hidden = true;
}

// Une una lista de texto o devuelve "ninguno" si está vacía
function textoLista(lista) {
  return lista === "" ? "ninguno" : lista;
}

formReina.addEventListener("submit", function (event) {
  event.preventDefault();

  const textoCartas = document.getElementById("cartas").value.trim();
  const cartas = Number(textoCartas);

  if (textoCartas === "" || isNaN(cartas) || !Number.isInteger(cartas)) {
    mostrarErrorReina("Ingresa un número entero.");
  } else if (cartas < 1 || cartas > MAX_CARTAS) {
    mostrarErrorReina("La cantidad debe estar entre 1 y " + MAX_CARTAS + ".");
  } else {
    document.getElementById("error-reina").textContent = "";

    let secuencia = "";
    let listaPares = "";
    let listaImpares = "";
    let cantidadPares = 0;
    let cantidadImpares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let numero = 1; numero <= cartas; numero++) {
      const separador = numero < cartas ? ", " : "";
      secuencia += numero + separador;

      if (numero % 2 === 0) {
        cantidadPares++;
        sumaPares += numero;
        listaPares += (listaPares === "" ? "" : ", ") + numero;
      } else {
        cantidadImpares++;
        sumaImpares += numero;
        listaImpares += (listaImpares === "" ? "" : ", ") + numero;
      }
    }

    let ganador;
    if (sumaPares > sumaImpares) {
      ganador =
        "¡Ganan los PARES con " + sumaPares + " contra " + sumaImpares + "!";
    } else if (sumaImpares > sumaPares) {
      ganador =
        "¡Ganan los IMPARES con " + sumaImpares + " contra " + sumaPares + "!";
    } else {
      ganador = "¡Empate! Ambos grupos suman " + sumaPares + ".";
    }

    document.getElementById("res-secuencia").textContent = secuencia;
    document.getElementById("res-lista-pares").textContent =
      textoLista(listaPares);
    document.getElementById("res-lista-impares").textContent =
      textoLista(listaImpares);
    document.getElementById("res-cant-pares").textContent = cantidadPares;
    document.getElementById("res-cant-impares").textContent = cantidadImpares;
    document.getElementById("res-suma-pares").textContent = sumaPares;
    document.getElementById("res-suma-impares").textContent = sumaImpares;
    document.getElementById("res-ganador").textContent = ganador;
    document.getElementById("resultado-reina").hidden = false;
  }
});

formReina.addEventListener("reset", function () {
  document.getElementById("error-reina").textContent = "";
  document.getElementById("resultado-reina").hidden = true;
});
