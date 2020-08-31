//hacer una función que te devuelva los números de la secuencia de Fibonacci
// 1.- definir qué hace
// 2.- que se llame así misma
// una manera de salir

function fibonacci(num, acc=[1,1,0]){
    if(acc[0]===num) return acc.reverse()
    acc.unshift(acc[0] + acc[1])
    return fibonacci(num, acc)

}

let res=fibonacci(1597)
console.log(res)

//Reproduciendo funciones básicas de js (arrays)
//forEach
let array=[1,2,3,4,5,6,7,8,9]
//recorre los elementos
//aplica el callback
function myOwnForEach(array, fn){
    for(let i=0; i<array.length; i++){
        fn(array[i])
    }


}

myOwnForEach(array, number=>console.log(number))

// función map
console.log('******************************************')

function myOwnMap(array, func) {
    for(let i=0; i<array.length; i++){
        newArray=[]
        let resul=func(array[i])
        newArray.push(resul)
    }
    return newArray
    
}

myOwnMap(array, number=>console.log(number*2))
//console.log(newA)