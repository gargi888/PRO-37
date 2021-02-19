var canvas;
var gameState = 0;
var contestantCount, database;
var allContestants;
var quiz, question, contestant;

function setup(){
  database = firebase.database();
  canvas = createCanvas(1000,500);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){

  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}
