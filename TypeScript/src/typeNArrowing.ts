function getHello(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ✅ string
  } else {
    console.log(id.toFixed(2)); // ✅ number
  }
}
getHello("Anuj");

function message(smg?: string) {
  if (smg) {
    console.log(`Helllo ${smg}`);
  } else {
    console.log("Ok");
  }
}
message("Anuj");

function oder(size: "small" | "medium" | "large" | number) {
  console.log(`You preffer glass size ${size}`);
}

oder("small");
oder(50);
// oder("hello")

class Student {
  study() {
    console.log(`Studying in juniour`);
  }
}

class SeniorStudent {
  study() {
    console.log(`Studying in seniour`);
  }
}

function School(std: Student | SeniorStudent) {
  if (std instanceof Student) {
    return std.study();
  } else {
    return std.study();
  }
}

let newS = new Student();
School(newS);
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: "Anuj",
  age: 22,
  isAdmin: true,
};

type Masala = { type: "masala"; spcicelevel: number };
type GaramMasala = { type: "GaramMasala"; power: number };
type FoodMasala = { type: "Foodmasala"; quality: number };

function TellOther(order: Masala | GaramMasala | FoodMasala) {
  switch (order.type) {
    case "Foodmasala":
      console.log("Food");
      break;
    case "GaramMasala":
      console.log("Garam");
      break;
    case "masala":
      console.log("Simple");
      break;
    default:
      break;
  }
}

function deterMine(order:Masala|FoodMasala|GaramMasala){
    if('power' in order){
        console.log("GaramMasala");
        
    } 
    else if('quality' in order){
        console.log("Food");
        
    }
    else{
        console.log("Simple");
        
    }
}

// function isStringArray(arr:unknown ):arr is string[]{

// } 