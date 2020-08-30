//segunda clase
//crear una función que imprima los números uno por uno sin utilzar un ciclo

let arr= [1,2,3,4,5,6,7]

function printNumbers(arr){
    //debe tener una condición para salir del ciclo
    // debemos autollamarnos 
    //definir lo que la función debe hacer
    if(!arr.length) return 
    console.log(arr[0])
    
    
    
    return printNumbers(arr.slice(1))
    //con ternario
   // return arr.length ? printNumbers(arr.slice(1)) : undefined

}
printNumbers(arr)

//función que suma 1 imprimiendo el resultado de 1 en 1 hasta 10

console.log('************************************************')

function addOne(counter){ // función pura
    if(counter>10) return
    console.log (counter)
    return addOne(counter+1)
     
}
let result = addOne(0)
console.log(result)

console.log('***********************************************')

function getTen(num){
    if(num>9) return num
    return getTen(num+10)

}
let ten = getTen(0)
console.log(ten)

console.log('***********************************************')
//función que suma todos los elementos de un array y devuelve el total
function sumArray(array, suma){
    if(!array.length) return suma
    suma+= array[0]
    console.log(suma)
    return sumArray(array.slice(1), suma)

}
let total = sumArray([2,6,10,23], 0)
console.log(total)
console.log('*************************************')
//otra manera de resolverlo

function sumArray2(arrr){
    if (arrr.length===1) return arrr[0]
    arrr[0]=arrr[0] + arrr.pop()
    //console.log(arrr[0])
    return sumArray2(arrr)
}

let total2= sumArray2([2,6,10,23])
console.log(total2)