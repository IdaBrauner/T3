var song;
function preload(){
  song=loadSound('Vengabois.mp3');
  moi=loadImage('hesus.jpg');
  light=loadImage('light.jpg');
  pika=loadImage('Pikachu.png');
  pika2=loadImage('pikachu2.png');
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 song.play();
}

function draw() {
  background(245,123,179);
  image(pika2,windowWidth/2+100,windowHeight/2-345,500,670);
  image(pika,windowWidth/2-650,windowHeight/2-345,550,670);
  fill(255,225,6)
  rect(windowWidth/2-235,windowHeight/2-345,430,670);
  image(light,windowWidth/2-225,windowHeight/2-335,410,650);
  strokeWeight(5);
  stroke(255,56,221);
  fill('rgba(255,56,221,0.50)');
  rect(windowWidth/2-195,windowHeight/2+25,355,255)
  fill(168,56,255);
  noStroke();
  rect(windowWidth/2-170,windowHeight/2-290,305,300)
  image(moi,windowWidth/2-150,windowHeight/2-275,265,270);
  fill(120,120,102)
  rect(windowWidth/2-180,windowHeight/2-300)
  pokemon();

}

function pokemon() {

 textSize(40);
 fill(255,225,56);
 text('Tutor-Power: 5.000',windowWidth/2-180,windowHeight/2-300);
 textSize(20);
 text('Årgang: 1995',windowWidth/2-175,windowHeight/2+50);
 text('Navn: Ida Bräuner Madsen',windowWidth/2-175,windowHeight/2+90);
 text('Styrker: Udklædning & Dansemoves ',windowWidth/2-175,windowHeight/2+130);
 text('Svagheder: Vine-APP & ',windowWidth/2-175,windowHeight/2+170);
 text('Ibiza - Vengabois',windowWidth/2-175,windowHeight/2+200);
 text('Favorit Rus-minde: Middag hos tutor',windowWidth/2-175,windowHeight/2+240);

}
