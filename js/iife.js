((name) => {
    //First attempt of optimization - reduce global scope pollution,
    console.log(`immediately invoked function evaluation => iife, hello ${name}`)

    revealingModule.printMessage()
    revealingModule.showMessage()

})('world')

