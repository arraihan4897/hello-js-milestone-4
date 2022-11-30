function radiansToDegrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
    const rddg =  radiansToDegrees(1) ;     
console.log(rddg);


function isJavaScript(jsFiles) {
 if ( typeof(jsFiles) == 'string' ) {
    return jsFiles.endsWith('.js') ;
 }
 else {
     return (false ,'you have to include the javascript file')
 }

}
const str = isJavaScript('rhn.ls') ;
console.log(str) ;


// ------------------------------------------------------------------------------------------------------------------//
//******************************[[ problem-3]]****************************//
// function declare as a oilPrice--->>
function oilPrice (dijelPrice, petrolPrice, octenPrice) {
    const dijel= 114;
    const petrol= 130;
    const octen= 135;
    const totaliDjelPrice = dijel * dijelPrice ;
    const totalPetrolPrice = petrol * petrolPrice;
    const totalOctenPrice = octen * octenPrice;
    const totalprice = totaliDjelPrice + totalPetrolPrice + totalOctenPrice ;
    return totalprice
    }
    const tottal = oilPrice(0,2,3);
    console.log(tottal);
    // ----------------------------------------------------------------------------------------------------------------------//
    //**********************************[[problem-4]]***********************************/
    // function Declare as a publicBusFare-------->>
    function publicBusFare(public) {
    const buscapacity= public % 50 ;
    const microcapacity = buscapacity % 11 ;
    return microcapacity*250
    }
    const vara = publicBusFare(365);
    console.log(vara);
    // ------------------------------------------------------------------------------------------------------------------//
    // ************************************[[ptoblem5]]****************************************//
    // object Declare--->>
    const bestFriend1={
    name:'abul',
    friends:'babul'
    }
    const bestFriend2={
    name:'babul',
    friends:'abul'
    }
    // function Declare-------->>
    function isBestFriend (friends1 , friends2) {
    if (bestFriend1.name === bestFriend2.friends && bestFriend1.friends === bestFriend2.name ) {
    return true
    }
    else{
    return false
    }
    }
    const friendss= isBestFriend (bestFriend1 ,bestFriend2);
    console.log(friendss);
    // --------------------------------------------------------the end------------------------------------------------------------//