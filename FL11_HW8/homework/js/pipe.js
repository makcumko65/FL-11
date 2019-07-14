function addOne(x){
    return x+1;
}
function pipe(number){
    for(let index = 1; index < arguments.length; index++){
        number = arguments[index](number);
    }
    return number;
}
console.log(pipe(1,addOne));
console.log(pipe(1,addOne,addOne));