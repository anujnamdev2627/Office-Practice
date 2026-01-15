let response: any = "42";

let numericLegth: number = (response as string).length;

type Book = {
  name: string;
};

let book = '{"name":"New Book"}';

//!Forceful Assertion
// let bookObj=JSON.parse(book) as Book
// console.log(bookObj.name);

//!Not ForceFUll assertion
// let bookObj=JSON.parse(book)
// console.log(bookObj);

const InputElement = document.getElementById("id") as HTMLInputElement;

try {
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log("Unknown Error");
  }
}

const data: unknown = "anuj namdev";
const strData: string = data as string;

type Role = "admin" | "user"|"superadmin ";

function redirectRole(role: Role): void {
  if (role === "admin") {
    console.log("Admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("User Dashboard");
    return;
  }
  role;
}
