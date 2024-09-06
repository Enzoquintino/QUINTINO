//Criando as variáveis para o tamanho da tela e da bolinha.

let compTela = 600;
let largTela = 400;
let tBolinha = 50;

//Criando as variáveis para a posição x e y da bolinha e iniciar centralizado.

let xBolinha = (compTela-tBolinha)/2;
let yBolinha = (largTela-tBolinha)/2;

//Criando e determinando as variáveis da bolinha

let xVelocBolinha = 3
let yVelocBolinha = 2

//Criando e determinando as variaveis da raquete 
let Xraquete = 5;
let yRaquete = 150;
let XraqueteOponente = 585;
let yRaqueteOponente = 150;
let largRaquete = 10;
let comRaquete = 90;

function setup() {
  createCanvas(compTela,largTela);
}


function draw() { 
  
background("red"); // determinando cor de fundo
  
circle(xBolinha,yBolinha,tBolinha); // criando a bolinha
  
fill("black");// criando cor da bolinha
  
xBolinha = xBolinha + xVelocBolinha; // movimentando a bolinha no eixo x 

yBolinha+=yVelocBolinha; // movimentando a bolinha no eixo y
  
// Verificando se a bolinha bate nas bordas x e se bater determinando sua volta 
  
if (xBolinha+tBolinha/2>width || xBolinha-tBolinha/2<0) {
  
xVelocBolinha*=-1;

} 

if (yBolinha+tBolinha/2>height || yBolinha-tBolinha/2<0) {
  
yVelocBolinha*=-1;

} 
  
// Verificando se a bolinha bate nas bordas v e se bater determinando sua volta
  
if (yBolinha>height || yBolinha<0){
yVelocBolinha*=-1;
    
}

}
