const vocales = "aeiou".split("");
const consonantes = "qwrtypsdfghjklñzxcvbnm".split("");
console.log(vocales, consonantes);

// Función para crear una palabra aleatoria
function crearPalabra(n_silabas) {
  let palabra = "";

  for (let i = 0; i < n_silabas; i++) {
    // Generamos una sílaba aleatoria
    palabra += random(consonantes) + random(vocales);
  }
  return palabra;
}

function setup() {
  createCanvas(400, 400);
  frameRate(1); // Generamos una palabra por segundo
  background(220);
}

function draw() {
  // Limpiar el fondo en cada frame
  background(220);

  // Generar una palabra aleatoria
  let palabra = crearPalabra(3);  // Generar una palabra de 3 sílabas

  // Mostrar la palabra en la pantalla
  textSize(32);
  text(palabra, random(width), random(height));

  // Asignar una forma basada en la palabra generada
  if (palabra.includes("a")) {
    // Si la palabra tiene la letra 'a', dibujar un círculo
    dibujarForma("círculo");
  } else if (palabra.includes("e")) {
    // Si tiene la letra 'e', dibujar un cuadrado
    dibujarForma("cuadrado");
  } else {
    // Si no tiene 'a' ni 'e', dibujar un triángulo
    dibujarForma("triángulo");
  }
}

// Función para dibujar formas geométricas aleatorias
function dibujarForma(forma) {
  const x = random(width);
  const y = random(height);
  const size = random(50, 100); // Tamaño aleatorio para las formas

  if (forma === "círculo") {
    ellipse(x, y, size, size); // Dibuja un círculo
  } else if (forma === "cuadrado") {
    rect(x, y, size, size); // Dibuja un cuadrado
  } else if (forma === "triángulo") {
    // Dibuja un triángulo
    triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
  }
}
