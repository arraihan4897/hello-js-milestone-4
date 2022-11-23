function Average (ass1, ass2,ass3) {

    const total = ass1+ ass2 +ass3;
    const avg = total /3 ;
    return avg


    
}

const ass1Marks= 57;
const ass2Marks=60;
const ass3Marks=60;

var cal =  Average (ass1Marks ,ass2Marks, ass3Marks) ;
console.log( ' my average ',cal);






function milesToKM(km) {

    const distance = km*1.60;
    return distance ;
    
}
const km = 25;
const calculation  =  milesToKM(km);
console.log(calculation);



function isEven (number) {

const  reminder = number%2;

if (reminder===0 ) {
    console.log(' this is even number');
    return true;

    
}
else{
    console.log("odd number");
    return false;

}
    
}

const number = 12;
const  even = isEven(number);
console.log(even);



