var dataBase;
var GameState = 0;
var playerCount = 0;
var form, player, game;

function setup(){

    dataBase = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
 
    background("white");
    
}