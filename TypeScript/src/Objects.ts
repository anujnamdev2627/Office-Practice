const chai = {
  name: "Masal Chai",
  price: 20,
  isHot: true,
};
// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

//!Object with type defination
// let tea:{
//     name:string;
//     price:number;
//     isHot:boolean;
// }
// tea={
//     name:"Ginger",
//     price:25,
//     isHot:true
// }

//!Object with  type defination
// type tea = {
//   name: string;
//   price: number;
//   ingredients: string[];
// };

// const AdrakChai: tea = {
//   name: "Adrak Chai",
//   price: 25,
//   ingredients: ["ginger", "tea leaves"],
// };

// type Cup = { size: string };
// let SmallCup:Cup={size:"200ml"}
// let BigCup={size:"500ml",material:"steel"}
// SmallCup=BigCup
// console.log(SmallCup);

// type Items = { name: string; quantity: number };
// type Address = { street: string; pin: number };

// type Order={
//     orderId:number;
//     items:Items[];
//     address:Address
// }

// type Chai = {
//   name: string;
//   price: number;
//   ishot: boolean;
// };

// const updateChai = (updates: Partial<Chai>) => {
//   console.log("Updating Chai with", updates);
// };
// updateChai({ price: 10 });

// type ChaiOder = {
//   name?: string;
//   quantity?: number;
// };

// const placeorder = (order: Required<ChaiOder>) => {
//   console.log(order);
// };

// placeorder({
//   name: "Hello",
//   quantity: 2,
// });

// type chai={
//   name:string;
//   price:number;
//   iSHot:boolean;
//   ingred:string[]

// }

// type BasicChaiInfo=Pick<chai,"name"|"price">;

// const chaiInfo:BasicChaiInfo={
//   name:"Gud Chai",
//   price:20
// }

type chai={
  name:string;
  price:number;
  iSHot:boolean;
  secretingred:string[]

}

type pubChai=Omit<chai,"secretinged">; 