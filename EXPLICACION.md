# Explicación del código

## Conceptos usados en los tres ejercicios

| Concepto | Qué hace | Dónde se usa |
|---|---|---|
| `const` | Declara un valor que no cambia (altura de la puerta, máximos, precios). | Constantes al inicio de cada JS |
| `let` | Declara una variable que sí cambia (acumuladores, mensaje, precio). | Contadores y sumas del ejercicio 3 |
| `if / else if / else` | Elige un camino según una condición. | Validaciones, ejercicio 1 y ganador del 3 |
| `switch` | Elige un caso entre varios valores posibles. | `obtenerPrecio()` en el ejercicio 2 |
| `for` | Repite instrucciones un número conocido de veces. | Recorrido de 1 a N en el ejercicio 3 |
| Función | Bloque reutilizable con nombre. | `calcularNuevaAltura`, `obtenerPrecio`, `textoLista` |
| `getElementById()` | Busca un elemento de la página por su `id`. | Todos los ejercicios |
| `.value` | Texto que el usuario escribió en un campo (siempre es texto). | Lectura de entradas |
| `.textContent` | Escribe texto dentro de un elemento, de forma segura. | Mostrar resultados y errores |
| `addEventListener()` | Asocia una función a un evento (aquí, `submit`). | Un formulario por ejercicio |
| `preventDefault()` | Evita que el formulario recargue la página. | Primera línea de cada `submit` |

Conversión de tipos: `.value` devuelve texto, así que se usa `Number(...)`. Antes se comprueba que el texto no esté vacío, porque `Number("")` da `0`.

---

## Ejercicio 1. La poción mágica de Alicia

**Algoritmo**
1. Leer altura y poción.
2. Validar que no estén vacíos, sean números y estén en rango.
3. Calcular `nueva altura = altura × (1 − ml / 100)`.
4. Comparar con la puerta (40 cm): menor, igual o mayor.
5. Mostrar altura final y mensaje.

**Variables:** `altura`, `pocion` (entradas); `nuevaAltura`, `mensaje`, `mlNecesarios` (proceso); constantes `ALTURA_PUERTA_CM`, `POCION_MIN_ML`, `POCION_MAX_ML`, `ALTURA_MAX_CM`.
**Operadores:** aritméticos (`*`, `-`, `/`), comparación (`<`, `===`, `>`), lógicos (`||`).
**Salida:** altura final en cm y mensaje (pasa, pasa justo, no pasa, o corregir datos).

| Entrada | Resultado esperado |
|---|---|
| 150 cm, 75 ml | 37.5 cm: puede pasar |
| 100 cm, 60 ml | 40 cm: pasa justita |
| 150 cm, 50 ml | 75 cm: no pasa, necesita 74 ml |
| 150 cm, 90 ml | Error: poción fuera de rango |
| (vacío), 30 ml | Error: completa los campos |

## Ejercicio 2. La merienda del Sombrerero Loco

**Algoritmo**
1. Leer nombre, bebida y tazas.
2. Obtener el precio con `switch` (devuelve `null` si la bebida no es válida).
3. Validar nombre no vacío, entero positivo y máximo 20.
4. `subtotal = precio × tazas`. Si `tazas >= 5`, descuento = 10 % del subtotal.
5. `total = subtotal − descuento`. Mostrar todo.

**Variables:** `nombre`, `bebida`, `tazas`, `precioUnitario`, `subtotal`, `descuento`, `total`.
**Operadores:** `*`, `-`, `/`, `>=`, `!`, `||`. Se usa `Number.isInteger()` para rechazar decimales.

| Entrada | Resultado esperado |
|---|---|
| Ana, Té, 3 | Subtotal $10.50, sin descuento, total $10.50 |
| Luis, Chocolate, 6 | Subtotal $30.00, descuento $3.00, total $27.00 |
| Ana, Café, 2.5 | Error: debe ser entero |
| Ana, Café, 21 | Error: máximo 20 |
| (vacío), Té, 2 | Error: nombre vacío |

## Ejercicio 3. El desafío de la Reina de Corazones

**Algoritmo**
1. Leer la cantidad de cartas y validar (entero entre 1 y 100).
2. Poner contadores y sumas en 0.
3. `for` de 1 a N: agregar a la secuencia; si `numero % 2 === 0` es par, si no es impar; actualizar cantidad, suma y lista del grupo.
4. Comparar sumas y decidir el grupo ganador o empate.

**Variables:** `cartas`, `numero` (contador del `for`), `cantidadPares`, `cantidadImpares`, `sumaPares`, `sumaImpares`, `secuencia`, `ganador`.
**Operadores:** `%` (residuo), `++`, `+=`, `<=`, `===`.

| Entrada | Resultado esperado |
|---|---|
| 5 | Pares: 2, 4 (suma 6). Impares: 1, 3, 5 (suma 9). Ganan impares |
| 1 | Pares: ninguno (0). Impares: 1 (suma 1). Ganan impares |
| 10 | Pares suman 30, impares 25. Ganan pares |
| 0, 101, 3.5 | Error de validación |

Nota: con N ≥ 1 el empate no ocurre, pero la condición se deja para cubrir todos los casos.

---

## Errores frecuentes
- Olvidar `event.preventDefault()`: la página se recarga y el resultado desaparece.
- Olvidar convertir con `Number()`: `"5" + "3"` da `"53"`, no `8`.
- Pensar que `Number("")` es inválido: da `0`; hay que revisar el texto vacío antes.
- Usar `=` en lugar de `===` en una condición.
- Escribir mal un `id` o no coincidir con el `for` del `label`: `getElementById` devuelve `null` y aparece un error en la consola.
- Cargar el `<script>` antes del HTML (o sin `defer`): los elementos aún no existen.
- Olvidar `break` en un `case` del `switch`: se ejecutan los casos siguientes.
- Condición del `for` mal escrita (`<` en vez de `<=`): se omite el último número.
- Ruta incorrecta de CSS/JS (`css/styles.css`) al publicar.

## Accesibilidad y diseño
- Cada `<input>` tiene su `<label for="...">`; todo se maneja con teclado (Tab, Enter) y los enfoques se ven con un borde dorado.
- Los resultados usan `role="status"` y los errores `role="alert"` para lectores de pantalla.
- Diseño adaptable sin Flexbox ni Grid: `max-width`, bloques y campos al 100 %.
