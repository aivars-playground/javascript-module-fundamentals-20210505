//note capital R - naming convention
var RevealingModuleConstructor = function() {
    var message = 'this is revealing module pattern: singleton'
    function printMessage() {
        console.log(message + this)
    }
    return {
        printMessage,
    }
}