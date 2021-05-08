((name) => {
    //First attempt of optimization - reduce global scope pollution,
    console.log(`immediately invoked function evaluation => iife, hello ${name}`)

    //revealingModuleSingleton has to be included in html before this js file
    revealingModuleSingleton.printMessage()
    revealingModuleSingleton.showMessage()

    var rmc1 = new RevealingModuleConstructor()
    var rmc2 = new RevealingModuleConstructor()
    rmc1.printMessage()
    console.log('rmc1 === rmc1 : ' + (rmc1 === rmc1))
    console.log('rmc1 === rmc2 : ' + (rmc1 === rmc2))


})('world')

