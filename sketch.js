
//    VARIAVEIS
var xBola = 400; // Posição do eixo X
var yBola = 250; // Posição do eixo Y
var diametro = 20; // Diametro da bolinha
var raio = diametro / 2; //
var velxbolinha = 5;// Velocidade da bolinha no eixo X
var velybolinha = 5;// Velocidade da bolinha no eixo Y

//      RAQUETE
var xRaquete = 5
var yRaquete = 300
var larguraraq = 10
var alturaraq = 60

//     RAQUETE INIMIGO
var xRaqueteI = 785;
var yRaqueteI = 300;
var VelyInimigo;
var aleatorio = Math.random() * 10 - 5;

//     CÓDIGO IMPORTADO BIBLIOTECA
var colidiu = false;

//     PLACAR
var MeusPontos = 0;
var PontosInimigo = 0;

//     EFEITOS SONOROS
var raqueteda;
var PontoAmigo;
var PontoInimigo;
var soundtrack;

//     TELA
function setup(){
  createCanvas(800, 500);
  soundtrack.loop();
}

//     MOSTRAR NA TELA
function draw() {
  background(0);
  MostraBolinha(); 
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteI, yRaqueteI);
  MovBolinha(); 
  MovRaquete();
  MovRaqueteI();
  VerificaColisãoBolinha(); 
  VerificaColisãoBibliotecaI();
  MarcaPlacarAmigo();
  MarcaPlacarInimigo()
  MostraPlacarAmigo();
  MostraPlacarInimigo();
}

//     BOLINHA
function MostraBolinha(){
  fill(255)
  circle(xBola, yBola, diametro);
}

//     MOSTRA RAQUETE
function MostraRaquete(x, y){
  rect(x, y, larguraraq, alturaraq);
  fill(255)
}

//    MOVIMENTO DA BOLINHA
function MovBolinha(){
  xBola += velxbolinha;
  yBola += velybolinha;
  if (xBola + raio > width || xBola - raio == 0) {
    velxbolinha *= -1;
}
  if (yBola + raio > height || yBola - raio == 0) {
    velybolinha *= -1;   
  }
}

//    MOVIMENTO DA RAQUETE AMIGO
function MovRaquete (){
if (keyIsDown(UP_ARROW) && yRaquete > 0){
  yRaquete -= 10;
}
if (keyIsDown(DOWN_ARROW) && yRaquete + alturaraq < height){
  yRaquete += 10;
  }
}

//     MEU CÓDIGO DE VERIFICAÇÃO DE COLISÃO AMIGO
function VerificaColisãoBolinha(){
  if(xBola - raio < xRaquete + larguraraq && yBola - raio < yRaquete + alturaraq && yBola + raio > yRaquete){
    velxbolinha *= -1;
    raquetada.play();
  }
}

//      MOVIMENTA RAQUETE INIMIGO
function MovRaqueteI(){
if (keyIsDown(87) && yRaqueteI > 0){
  yRaqueteI -= 10;
}
if (keyIsDown(83) && yRaqueteI + alturaraq < height){
  yRaqueteI += 10;
  }

}

//    CÓDIGO DE VERIFICAÇÃO DE COLISÃO BIBLIOTECA INIMIGO
function VerificaColisãoBibliotecaI(){
  colidiu = collideRectCircle(xRaqueteI, yRaqueteI, larguraraq, alturaraq, xBola, yBola, raio);
  if(colidiu){
    velxbolinha *= -1;
    raquetada.play();
  }
}

//    MARCADOR DE PONTOS
function MarcaPlacarAmigo(){
  if (xBola > 790){
    MeusPontos += 1;
    PontoInimigo.play();
  }
}

function MarcaPlacarInimigo(){
  if (xBola - raio == 0){
    PontosInimigo += 1;
    PontoAmigo.play();
  }
}
  
function MostraPlacarInimigo(){  
  stroke(255);
  text(PontosInimigo, 500, 50)
  fill("rgb(242,252,252)")
}


//    INCLUÍ PLACAR
function MostraPlacarAmigo(){
  textSize(30)
  fill("rgb(237,240,238)")
  text(MeusPontos, 300, 50)
}
//     INCLUÍ SONS
function preload(){
  soundtrack = loadSound("SoundtrackPong.mp3")
  PontoAmigo = loadSound("pointAmigo.mp3")
  PontoInimigo = loadSound("pointInimigo.mp3")
  raquetada = loadSound("Tennishit.mp3")
}
