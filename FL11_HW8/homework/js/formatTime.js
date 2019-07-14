function formatTime(number){
    let day = 0;
    let hours = 0;
    let minutes = 0;
    while (number >= 3600){
        day += 1;
        number -= 3600;
    }
    while(number >= 60){
        hours += 1;
        number -= 60;
    }
    minutes += number;
    return `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}
console.log(formatTime(120));

console.log(formatTime(59));

console.log(formatTime(3601));