//!Normal way
// function makeFood(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveFood(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

//! Using type
// type Foodorder = { type: string; sugar: number; strong: boolean };

// function makeFood(order: Foodorder) {
//   console.log(order);
// }

// function serveFood(order: Foodorder) {
//   console.log(order);
// }

// type TeaRececipe{
//     water:number;
//     milk:number;
// }

// class MasalaChai implements TeaRececipe{
//     water=100;
//     milk=50;
// }

// interface Cupsize{
//     size:'small'|"large"
// }
// class Chai implements Cupsize{
//       size: "small" |"large"="large"
// }

// type BaseChai = { teaLeaves: number };
// type Extra = { masala: number };
// type MasalaChai = BaseChai & Extra;

// const cup: MasalaChai = {
//   teaLeaves: 2,
//   masala: 2,
// };
// //!With opitional

// type User = {
//   username: string;
//   bio?: string;
// };
// const u1: User = { username: "Anuj" };
// const u2: User = { username: "Anuj", bio: "Hello" };

//! With ReadOnly

type Config={
    readonly appname:string,
    version:number
}

const cfg:Config={
    appname:"New App",
    version:1

}
// cfg.appname="Hello"