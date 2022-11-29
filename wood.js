function calculateFormat(chair , table , bed  ) {

    const perChair = 3;
    const perTable = 6;
    const perBed = 9;


    const woodForChair = perChair*chair ;
    const woodForTable = perTable*table ;
    const woodForBed = perBed*bed ;
    


    const total =woodForChair+woodForTable+  woodForBed;
    return total ;
    
}

const calculate = calculateFormat(1,3,8);
console.log(calculate);