//crear mi propio tiruriruriru..........tiruriruriru.......... slice
//recrear tu propio filter
//extra find, reduce, sort

//función slice

let array= [1,2,3,4,5,6,7]
function slice(array, start, end) {
    if(!end) end = array.length
    else if (end<0) end= array.length-1 + end
    const result= []
    for (let i = start; i<end; i++){
        result.push(array[i])
    }
    return result
}

let r = slice(array, 2, -1 )
console.log (r)