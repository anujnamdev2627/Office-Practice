let subs :number|string= 7

let apiStatus:'pending'|'sucess'|"error"="pending"

let airLine:'aile'|"window"|"middle"="aile"

const orders=['12','20','28','42']
let currentorder:string|undefined;
for(let order of orders){
     if(order=='28')
     {
        currentorder=order;
        break;
     }
}
console.log(currentorder);
 
