function wrapArray<T>(item: T): T[] {
  return [item];
}

let arr = wrapArray("Masala");
let arr2 = wrapArray(42);

console.log(arr, arr2);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

let t = pair("masala", "test");

console.log(t);

//!Generic Interface

interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 10 };
const StringBox: Box<string> = { content: "10" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ name: string; age? : number }> = {
  status: 200,
  data: { name: "Anuj", age: 25 },
};
console.log(res);
