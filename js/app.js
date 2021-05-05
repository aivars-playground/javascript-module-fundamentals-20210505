((name) => {
    //First attempt of optimization - reduce global scope pollution,
    console.log(`immediately invoked function evaluation => iife, hello ${name}`)
})('world')

