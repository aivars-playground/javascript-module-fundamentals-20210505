const commonPlayer = require('./com_player.js')
const commonGame = require("./com_game.js");


console.log('Starting MultiMath with an CommonJs/SystemJs');

// add click handler to the start game button
document.getElementById('commonStartGame').addEventListener('click', function () {
    commonPlayer.setName(document.getElementById('playername').value);
    commonGame.printGame();
});

// add click handler to the calculate score button
document.getElementById('commonCalculate').addEventListener('click', function () {
    commonGame.calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = commonGame.getProblemCount();
