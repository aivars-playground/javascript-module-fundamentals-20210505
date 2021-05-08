define([],function () {

    console.log('Creating an AMD player...');

    // private members
    var playerName = '';

    function logPlayer() {
        console.log('The current AMD player is ' + playerName + '.');
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
})