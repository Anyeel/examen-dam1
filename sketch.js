const vocales = "aeiou".split("")
const consonantes = "qwrtypsdfghjklñzxcvbnm".split("")

function setup() {
  createCanvas(400, 400);
  frameRate();
  background(220);
}

function crearPalabra(n_silabas){
  let palabra = "";
  for(let i = 0; i < n_silabas; i++){
    palabra += random(consonantes) + random(vocales);
  }
  return palabra;
}

function draw() {
  console.log(sin(frameCount / 20) * 100);
  const velocidad = 100;
  const amplitud = 100;
  const posX = width / 2;
  const posY = height / 2;

  // Dibujar las elipses con movimiento noise
  ellipse(noise(frameCount / velocidad) * amplitud + posX, frameCount, 1);
  ellipse(frameCount, noise(frameCount / velocidad) * amplitud + posY, 1);

  // Crear una palabra con un número entero de sílabas aleatorias
  let numSilabas = int(random(1, 6)); // Entre 1 y 5 sílabas
  text(crearPalabra(numSilabas), random(width), random(height));
}
