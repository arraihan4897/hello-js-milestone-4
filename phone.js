const phones = [
    {name : 'oppo' , camera : '10' ,storage: '3/32' ,price : 30000,color : 'silver'},
    {name : 'smasung' , camera : '10' ,storage: '3/32' ,price : 32000,color : 'silver'},
    {name : 'vivo' , camera : '10' ,storage: '3/32' ,price : 65000,color : 'silver'},
    {name : 'iphone' , camera : '10' ,storage: '3/32' ,price : 12000,color : 'silver'},
    {name : 'nokiya' , camera : '10' ,storage: '3/32' ,price : 3600,color : 'silver'},
    {name : 'techno' , camera : '10' ,storage: '3/32' ,price : 62000,color : 'silver'},
]

function cheapersPhones(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
       
        if (phone.price >  cheapest.price) {
            cheapest = phone;
            
        }
      
        
    }
      return cheapest;
}
 const phn = cheapersPhones(phones);
 console.log(phn);