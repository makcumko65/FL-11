function GetMin(){
    let min = arguments[0];
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index] < min){
            min = arguments[index];
        }       
    }
    return min;
}
console.log(GetMin(3,0,-3));