define(['./amd_player','./amd_game'],function (amdPlayer, amdGame) {

    console.log('Starting MultiMath with an AMD/RequireJs');

    // add click handler to the start game button
    document.getElementById('amdStartGame').addEventListener('click', function () {
        amdPlayer.setName(document.getElementById('playername').value);
        amdGame.printGame();
    });

    // add click handler to the calculate score button
    document.getElementById('amdCalculate').addEventListener('click', function () {
        amdGame.calculateScore();
    });

    // set the default number of problems
    document.getElementById('problemCount').value = amdGame.getProblemCount();

})