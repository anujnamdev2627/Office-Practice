let map=new Map();
console.log(typeof(map));

let arr=[1,2,3,2,1,2,36,5,4,7,9,4,1,1,2,3,6,4,6]

for (let x of arr){
   let prev=map.get(x)||0;
    map.set(x,prev+1);
}
console.log(map);

