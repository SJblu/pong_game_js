//Dimensão e coordenadas de partida da bolinha
let xBola = 300
let yBola = 200
let bolaDiametro = 20
let raio = bolaDiametro / 2

//dimensao e coordenadas de partida da raquete
let xRaqueteEsquerda = 20
let yRaqueteEsquerda = 150
let larguraRaquete = 20
let alturaRaquete = 100

//velocidade de movimento da bolinha
let velocidadeXBola = 4
let velocidadeYBola = 4

let colisao = false

//Dimensao do cenario
function setup() {
  createCanvas(600, 400)
}

//Funcao draw é nativa do p5.js. Neste caso exibe a cor do cenario e chama as funções para movimentação dos atores
function draw() {
  background(0, 0, 0)
  desenhaBola()
  desenhaRaqueteEsquerda()
  movimentoBola()
  colisaoBordaBola()
  movimentoRaqueteEsquerda()
  //colisaoBolaRaqueteEsquerda()
  colisaoBolaRaqueteEsquerdaCollideLib()
  
}
  
function desenhaBola(){
  circle(xBola, yBola, bolaDiametro)
}

function desenhaRaqueteEsquerda(){
  rect(xRaqueteEsquerda, yRaqueteEsquerda, larguraRaquete, alturaRaquete)
}

function movimentoBola(){
  xBola -= velocidadeXBola
  yBola += velocidadeYBola
  
}

function colisaoBordaBola() {
  if (xBola+raio > width || xBola-raio < 0) {
    velocidadeXBola *= -1
   }
  if (yBola+raio > height || yBola-raio < 0) {
    velocidadeYBola *= -1
  }
}

function movimentoRaqueteEsquerda(){
  if (keyIsDown(UP_ARROW) && yRaqueteEsquerda > 0) {
    yRaqueteEsquerda -= 10
  }
  if (keyIsDown(DOWN_ARROW) && yRaqueteEsquerda < (height-alturaRaquete)) {
    yRaqueteEsquerda += 10
  }
}

//funcao de colisao substituida ao implementar biblioteca Collide2D
function colisaoBolaRaqueteEsquerda(){
  if (xBola-raio < (xRaqueteEsquerda + larguraRaquete) && yBola-raio < (yRaqueteEsquerda + alturaRaquete) && yBola+raio > yRaqueteEsquerda) {
    velocidadeXBola *= -1
   } 
}

function colisaoBolaRaqueteEsquerdaCollideLib(){
  colisao = collideRectCircle(xRaqueteEsquerda, yRaqueteEsquerda, larguraRaquete, alturaRaquete, xBola, yBola, raio);
  if(colisao){
    velocidadeXBola *= -1
  }
}
