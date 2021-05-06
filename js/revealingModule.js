var revealingModule = function() {
    var message = 'this is revealing module pattern'
    function printMessage() {
        console.log(message)
    }
    return {
        printMessage,
        showMessage: printMessage //alias
    }
}()