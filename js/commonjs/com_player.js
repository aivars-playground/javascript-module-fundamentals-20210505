console.log('Creating an CommonJs player...');

// private members
var playerName = '';

function logPlayer() {
    console.log('The current CommonJs player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

module.exports.logPlayer = logPlayer  //the same as exports.logPlayer
exports.setName = setName
exports.getName = getName