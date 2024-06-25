//Exemplo da função para criar um crônometro.
let objeto;
let jogaor; 
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  createCanvas(400, 400);
  objeto = createVector(random(0,width),random(0,height));
}

function draw() {
  //
  timer -= 1/60;
  jogador = createVector(mouseX,mouseY);
  background(220);
  
  //Verificando o tempo
  if(timer <= 0){
    textSize(32);
    text("GAMER OVER",90,200);
    noLoop();
  }
  
  //Criando o objeto
  circle(objeto.x,objeto.y, raio);
  
  //Mapeando o Tempo
  let comprimento = map(timer,0,5,0,200);
  rect(20,20,10,comprimento);
  
  //exibindo os pontos
  textSize(24);
  text(pontos,180,40);
}

  //Implementando o click
function mousePressed(){
  let dis = p5.Vector.dist(jogador,objeto);
  //Verificando a distância
    if(dis < raio){
      objeto = createVector(random(width), random(height));
      timer += 0.6;
      pontos += 1;
    }
}

//Criar o objeto click: Ok
//Criar o vetor click: OK
//Mover o objeto quando clicado: 
//Criar o timer usando a função Map: Ok
//Criar Pontos do Jogo: 