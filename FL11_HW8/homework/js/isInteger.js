function isInteger(number){
    let integer = Math.floor(number);
    if(number - integer === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isInteger(5.8));
console.log(isInteger(5.1));
console.log(isInteger(5));