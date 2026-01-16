// // // // // const user = {
// // // // //   name: "Daniel",
// // // // //   age: 26,
// // // // // };

// // // // // user.location;
// // // // // "noImplicitAny"
// // // // // let user;

// // // // function printTextOrNumberOrBool(
// // // //   textOrNumberOrBool: string | number | boolean
// // // // ) {
// // // //   console.log(textOrNumberOrBool);
// // // // }
// // // // printTextOrNumberOrBool("anuj");

// // // ===============================================================================================
//! // // declare function handleRequest(url: string, method: "GET" | "POST"): void;

// // // const req = { url: "https://example.com", method: "GET" };
// // // handleRequest(req.url, req.method);
// // // // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
// // // ===============================================================================================
// // type GreetFunction = (a: string) => void;
// // function greeter(fn: GreetFunction) {
// //   // ...
// // }
// // // ===============================================================================================
//! function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let temp=identity("anuj")
// let temp2=identity<number>;
// console.log(temp2( 1 as number))

//! key off ===============================================
// type User = {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// };

// type UserKeys = keyof User;
// // "id" | "name" | "isAdmin"

// //!Mapped Types
// // Removes 'optional' attributes from a type's properties
// type Concrete<Type> = {
//   [Property in keyof Type]-?: Type[Property];
// };

// type MaybeUser = {
//   id: string;
//   name?: string;
//   age?: number;
// };

// type User = Concrete<MaybeUser>;

// type User = {
//     id: string;
//     name: string;
//     age: number;
// }

// type Getters<Type> = {
//     [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// };

// interface Person {
//     name: string;
//     age: number;
//     location: string;
// }

// type LazyPerson = Getters<Person>;

// type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }

//! Implements
// class A {
//  let a: number = 2;

//   ping(): void;
// }

// class B implements A {
//   ping(): void {
//     console.log("I am in B");
//   }
// }

// class C implements A {
//   ping(): void {
//     console.log("I am in C");
//   }
//   pong(): void {
//     console.log("I am in C second");
//   }
// }

// let child = new C();
// child.ping();

//! Working of this at run time exapmle
// class MyClass {
//   name = "MyClass";
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };
 
// // Prints "obj", not "MyClass"
// console.log(obj.getName());

//!Record type
// Record<Keys, Type>
// Released:
// 2.1

// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

// Example
// type CatName = "miffy" | "boris" | "mordred";
 
// interface CatInfo {
//   age: number;
//   breed: string;
// }
 
// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };
 
// cats.boris;

//! Exclude<UnionType, ExcludedMembers>
// Released:
// 2.8

// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

// Example
// type T0 = Exclude<"a" | "b" | "c", "a">;
     
// type T0 = "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
// type T1 = "c"
// type T2 = Exclude<string | number | (() => void), Function>;
     
// type T2 = string | number
 
// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };
 
// type T3 = Exclude<Shape, { kind: "circle" }>
     
// type T3 = {
//     kind: "square";
//     x: number;
// } | {
//     kind: "triangle";
//     x: number;
//     y: number;
// }