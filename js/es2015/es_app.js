import defaultAssignPlayerName from './es_player.js'
import {printGame, calculateScore, getProblemCount} from './es_game.js'

console.log('Starting MultiMath with an ES2015');

// add click handler to the start game button
document.getElementById('esStartGame').addEventListener('click', function () {
    defaultAssignPlayerName(document.getElementById('playername').value);
    printGame();
});

// add click handler to the calculate score button
document.getElementById('esCalculate').addEventListener('click', function () {
    calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = getProblemCount();
