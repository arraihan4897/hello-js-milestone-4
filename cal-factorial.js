// mul ++ for
function getmulSum (factorial) {
    let mulsum= 1;
    for (let i=factorial ;i >=1; i--){
        mulsum = mulsum *i 
      console.log( i, mulsum );
  
  }
  return mulsum;
    
}
const mulcal = getmulSum(9);
console.log(mulcal);


// add++ for


function getSum () {
    let sum= 0;
    for (let i=0 ;i <=7; i++){
    sum = sum +i 
      console.log( i, sum );
  
  }
  return sum;
    
}
const cal = getSum();
console.log(cal);