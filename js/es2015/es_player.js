console.log('Creating an ES2015 player...');

// private members
var playerName = '';

export function logPlayer() {
    console.log('The current ES2015 player is ' + playerName + '.');
}

export default function setName(newName) {
    playerName = newName;
}

export function getName() {
    return playerName;
}
