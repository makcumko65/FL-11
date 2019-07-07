let a1 = parseFloat(prompt('Enter x for A'));
let a2 = parseFloat(prompt('Enter y for A'));
let b1 = parseFloat(prompt('Enter x for B'));
let b2 = parseFloat(prompt('Enter y for B'));
let c1 = parseFloat(prompt('Enter x for C'));
let c2 = parseFloat(prompt('Enter y for C'));
if(isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)){
    alert('You entered wrong value');
}else{
    let half = 2;
    if((a1 + b1) / half === c1 && (a2 + b2) / half === c2){
        console.log(true);
    }else{
        console.log(false);
    }
}