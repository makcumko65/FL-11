function getNumbers(string){
    let arrayOfNumbers = []; 
    for(let index = 0; index < string.length; index++){
        if(!isNaN(+string[index])){
            arrayOfNumbers.push(+string[index]);
        }
    }
    return arrayOfNumbers;
}
//console.log(getNumbers('dada230dadada'));
function findTypes(){
    let dataTypes = {};
    for(let index = 0; index < arguments.length; index++){
        if(dataTypes.hasOwnProperty(typeof arguments[index])){
            dataTypes[typeof arguments[index]]++;
        }else{
            dataTypes[typeof arguments[index]] = 1;
        }
    }
    return dataTypes;
}
//console.log(findTypes(3,true,"3",{cz:32},[2121],function(){}));
function executeforEach(array, foo){
    for(let index = 0; index < array.length; index++){
        foo(array[index]);
    }
}
//executeforEach([2, 5, 8], function(el) { console.log(el); });
function mapArray(array, foo){
    let newArray = [];
    executeforEach(array,function(el){
        newArray.push(foo(el));
    }); 
    return newArray;
}
//console.log(mapArray([2, 5, 8], function(el) { return el + 3; }));
function filterArray(arr,foo){
    let newArray = [];
    executeforEach(arr, function(el){
        if(foo(el)){
            newArray.push(el);
        }
    });
    return newArray;
}
//console.log(filterArray([2, 5, 8], function(el){ return el > 3; }));
function showFormattedDate(date){
    const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];
    return `Date: ${mons[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
//console.log(showFormattedDate(new Date('2019-12-17T01:10:00')));
function canConvertToDate(date){
    if(new Date(date) + '' === 'Invalid Date'){
        return false;
    }
    return true;
}
//console.log(canConvertToDate('2019-12-30T01:10:00'));
//console.log(canConvertToDate('2019-12-17T01:q10:00'));
function daysBetween(date1,date2){
    let miliSecondsInSecond = 1000;
    let secondsInHour = 3600;
    let hoursInDay = 24;
    let days = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (miliSecondsInSecond*secondsInHour*hoursInDay));
    return days;
}
//console.log(daysBetween(new Date('2016-03-18T00:00:00'),new Date('2016-04-19T00:00:00')));
function getAmountOfAdultPeople(data){
    let currentDate = new Date();
    let adult = 18;
    let daysInYear = 365;
    let adultPersons = [];
    for(let index = 0; index < data.length; index++){
        let parseDate = new Date(data[index][' birthday ']);
        adultPersons.push(Math.round(daysBetween(currentDate, parseDate) / daysInYear));
    }
    return filterArray(adultPersons, function(el){ 
            return el > adult;       
    }).length;
}
/*console.log(getAmountOfAdultPeople([
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      " birthday ": '2016-03-18T00:00:00',
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      " birthday ": '2000-02-11T00:00:00',
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      " birthday ": '1984-04-17T00:00:00',
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      " birthday ": '1994-04-17T00:00:00',
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]));*/
function keys(element){
    let arrayKeys = [];
    for(let key in element){
        if(element.hasOwnProperty(key)){
            arrayKeys.push(key);
        }
    }
    return arrayKeys;
}
//console.log(keys({ keyOne : 1, keyTwo: 2, keyThree: 3}));
function values(element){
    let arrayKeys = [];
    for(let key in element){
        if(element.hasOwnProperty(key)){
            arrayKeys.push(element[key]);
        }
    }
    return arrayKeys;
}
//console.log(values({ keyOne : 1, keyTwo: 2, keyThree: 3}));









