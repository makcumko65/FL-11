let a = parseFloat(prompt('Enter a'));
let b = parseFloat(prompt('Enter b'));
let c = parseFloat(prompt('Enter c'));
if(isNaN(a) || isNaN(b) || isNaN(c)){
    alert('You entered wrong value');
}else{
    if(a + b > c && a + c > b && b + c > a && a >= 0 && b >= 0 && c >= 0){
        if(a === b && b === c){
            console.log('Eequivalent triangle')
        }else if(a === b || b === c || a === c){
            console.log('Isosceles triangle');
        }else{
            console.log('Normal triangle');
        }
    }else{
        console.log('Triangle doesn\'t exist');
    }
}
