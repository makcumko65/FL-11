function reverseNumber(number){       
    while(number % 10 === 0){
        number /= 10;
    }
    let reverseNumber = "";
    let stringNumber = String(number);
    for(let i = 0, j = stringNumber.length - 1; j > 0 ; i++, j--){
        reverseNumber += stringNumber[j];
    }
    if(number >= 0){
        reverseNumber += stringNumber[0];
    }else{
        reverseNumber *= -1;
    }
    return +reverseNumber;

}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));