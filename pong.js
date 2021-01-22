//Dimensão e coordenadas de partida da bolinha
let xBola = 300
let yBola = 200
let bolaDiametro = 20
let raio = bolaDiametro / 2

//dimensao e coordenadas de partida da raquete
let xRaqueteEsquerda = 20
let yRaqueteEsquerda = 150
let xRaqueteDireita = 560
let yRaqueteDireita = 150
let larguraRaquete = 20
let alturaRaquete = 100

//velocidade de movimento da bolinha e raquete CPU
let velocidadeXBola = 4
let velocidadeYBola = 4
let velocidadeYCPU

let colisao = false

//Dimensao do cenario
function setup() {
  createCanvas(600, 400)
}

//Funcao draw é nativa do p5.js. Neste caso exibe a cor do cenario e chama as funções para movimentação dos atores
function draw() {
  background(0, 0, 0)
  desenhaBola()
  desenhaRaquete(xRaqueteEsquerda, yRaqueteEsquerda)
  desenhaRaquete(xRaqueteDireita, yRaqueteDireita)
  movimentoBola()
  colisaoBordaBola()
  movimentoRaqueteEsquerda()
  //movimentoRaqueteDireita() //funcao para movimento da raquete manual 
  movimentoRaqueteCPU()
  colisaoBolaRaqueteCollideLib(xRaqueteEsquerda, yRaqueteEsquerda)
  colisaoBolaRaqueteCollideLib(xRaqueteDireita, yRaqueteDireita)
  
}
  
function desenhaBola(){
  circle(xBola, yBola, bolaDiametro)
}

function desenhaRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete)
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

//funcao para movimento manual da raquete Direita
function movimentoRaqueteDireita(){
  if (keyIsDown(LEFT_ARROW) && yRaqueteDireita > 0) {
    yRaqueteDireita -= 10
  }
  if (keyIsDown(RIGHT_ARROW) && yRaqueteDireita < (height-alturaRaquete)) {
    yRaqueteDireita += 10
  }
}

//funcao para movimento automatico da raquete Direita
function movimentoRaqueteCPU(){
  velocidadeYCPU = yBola - yRaqueteDireita - (larguraRaquete / 2) - 30
  yRaqueteDireita += velocidadeYCPU
}

//funcao de colisao substituida ao implementar biblioteca Collide2D
function colisaoBolaRaquete(x, y){
  if (xBola-raio < (x + larguraRaquete) && yBola-raio < (y + alturaRaquete) && yBola+raio > y) {
    velocidadeXBola *= -1
   } 
}

//colisao da bolinha com as raquetes utilizando Collide2D
function colisaoBolaRaqueteCollideLib(x, y){
  colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBola, yBola, raio);
  if(colisao){
    velocidadeXBola *= -1
  }
}
