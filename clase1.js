//programación funcional
//OOP
//imperativa
//declarativa

//HOFs- high  Order Function

function addChelas(fn, name){
    fn(name) 
    console.log("vamos chelas ya es viernes!")
    
}

function sayMyName(name){
    console.log('Hola ' + name)
}

addChelas(sayMyName, "Car")

//abstracción
//necesito que esa función de orden superior me entregue otra función
//composición, se le llama así porque se le entrega elementos a la función y crea una nueva
//inmutabilidad, no cambia la función, retorna una nueva con los elementos que se le da (composición)
function addChelas2(fn2, name2){
    return (day, func)=>{
        fn2(name2)
        console.log(day + " de chelas")
        func()
    }
}

function sayMyName2(name2){
    console.log("helloooo"  + name2)
}

//let usarViernes= addChelas2(sayMyName2, "carmen")
//usarViernes()
//
//EFIE
//invocar una función antes de que exista, es un then implicito 
//otra manera de invocar la función sin guardar la func en una variable
//cuando la autoinvocas puedes pasarle otros parámetros
addChelas2(sayMyName2, "carmeeeeen") ("Lunes", ()=>{
    console.log("y papas fritas mmmmm")
})

