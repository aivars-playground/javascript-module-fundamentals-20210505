var revealingModuleSingleton = function() {
    var message = 'this is revealing module pattern: singleton'
    function printMessage() {
        console.log(message + this)
    }
    return {
        printMessage,
        showMessage: printMessage //alias
    }
}()  // () <- makes it singleton