function maxInArray(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largest) {
            largest = element;
        }
     
        
    }
    return largest;
    
}
const  heights =[167,188,542,187]
const tallest= maxInArray (heights);
console.log( 'tallest person ',tallest);