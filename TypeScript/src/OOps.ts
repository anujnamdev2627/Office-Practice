// class Chai {
//   flavour: string;
//   price: number=50;
// //   constructor(flavour: string, price: number) {
// //     this.flavour = flavour;
// //     this.price = price;
// //   }
//  constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);

//   }
// }
// const masala = new Chai("masala");
// masala.flavour = "masala";

//!Access Modifier

// class Chai {
//   public flavour: string = "Masala";
//   private ingredients: string[] = ["Ginger"];

//   reveal() {
//     return this.ingredients;
//   }
//   protected shopName = "Chai Corner";
// }
// // const c1=new Chai()
// // console.log(
// // c1.flavour);
// // console.log(c1.reveal());


// // class Shop{
// //     protected shopName="Chai Corner"
// // }
// // class Branch extends Shop{
// //     getName(){
// //         return this.shopName
// //     }
// // }


// class Walet{
//     #balance=100
//     getBalance(){
//         return this.#balance
//     }
// }

// const w=new Walet();
// w.getBalance()

// class Cup{
//     readonly cpap:number=200

//     constructor(capacity:number){
//         this.cpap=capacity;
//     }

// }

// class ModernChai{
//     private _sugar:number=2;

//     get sugar(){
//         return this._sugar
//     }
//     set sugar(value:number){
//         if(value>5)throw new Error("Too much")
//             this._sugar=value

//     }
// }

// const c=new ModernChai()

// class Ekchai{
//     static shopName="Chai Code"

//     constructor(public flavor:string){}
// }console.log(Ekchai.shopName);


//!Abstract Class

// abstract class Drink{
//     abstract make():void

// }

// class Mychai extends Drink{
//     make(): void {
//         console.log("Brewing");
        
//     }
// }


//! Composition
// class Heater{
//     heat(){}
// }

// class ChaiMaker{
//     constructor(private heater:Heater){}
//     make(){
//         this.heater.heat
//     }
// }


