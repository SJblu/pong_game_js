//Dimensão e local de partida da bolinha
let xBola = 300
let yBola = 200
let bolaDiametro = 20
let raio = bolaDiametro / 2

//velocidade de movimento da bolinha
let velocidadeXBola = 4
let velocidadeYBola = 4

//Dimensao do cenario
function setup() {
  createCanvas(600, 400)
}

//Funcao draw é nativa do p5.js. Neste caso exibe a cor do cenario e chama as funções para movimentação dos atores
function draw() {
  background(0, 0, 0);
  desenhaBola()
  movimentoBola()
  colisaoBordaBola()
  
}
  
function desenhaBola(){
  circle(xBola, yBola, bolaDiametro)
}

function movimentoBola(){
  xBola += velocidadeXBola
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