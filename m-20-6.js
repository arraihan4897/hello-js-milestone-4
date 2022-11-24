// function getOddNumbersFromAnArray(oddNumbers ) {
//     const result = [];
  
//     for (var i = 0; i < oddNumbers.length; i++) {
//         var oddNumberr = oddNumbers[i];
//         if (oddNumberr% 2 !==0) {
           
//             console.log(i ,oddNumberr);
//             result.push(oddNumberr);

//         }
       
//     }
//     return result;
    
    
// }
// const oddNumbers = [120,203,501,402,507,20,15]
// const result = getOddNumbersFromAnArray(oddNumbers);
// console.log(result);


function getOddNumbersFromAnArray(params) {

    const oddNumbers = [];
        for (let  i = 0;  i < params.length;  i++) {
            const element = params[ i];
            if (element % 2 !== 0) {
                oddNumbers.push(element);
            
        }
    
}
return oddNumbers;
}

const oddNumbers = [120,203,501,402,507,20,15]
const result = getOddNumbersFromAnArray(oddNumbers);
console.log(result);