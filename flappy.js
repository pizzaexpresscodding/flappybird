// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game idth
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 800, Phaser.AUTO, 'game', stateActions);

var score = 0;
var labelScore;

var Player;

var pipes;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("Flask", "assets/flask.png");
    game.load.image("Dipstick", "assets/Dipstick.png")
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.setBackgroundColor("#F69D1F");
    game.add.text(280, 200, "Shaken not Stirred", {font: "30px Arial", fill: "#FFFFFF"});
    //
    Player = game.add.sprite(10, 270, "Flask");

    game.physics.arcade.enable(Player);

    Player.body.gravity.y = 400

    Player.x = 100;
    Player.y = 200;
    //
    //
    //

    game.input.onDown.add(clickhandler);

    game.input.
        keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(goup);

    labelScore = game.add.text(20, 20, "0");

    pipes = game.add.group();
    generatePipe();

    Player.checkWorldBounds = true;
    Player.events.onOutOfBounds.add(gameOver);
}
function clickhandler(event){
    alert("CAKE")
}

function generatePipe() {
    var gapStart = game.rnd.integerInRange(0,6);
    var gapEnd = game.rnd.integerInRange(gapStart,8);

    for (var count = 0; count < 8 ; count++) {
        if (count < gapStart || count > gapEnd) {
            addPipeBlock(60, 100 * count);
        }

    }
}

function addPipeBlock(x, y) {
    var pipe = pipes.create(x, y, 'Dipstick');
}

function changeScore() {
    score = score + 1;
    labelScore.setText(score.toString());
}

function goup() {
    Player.body.velocity.y = Player.body.velocity.y - 200;
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}