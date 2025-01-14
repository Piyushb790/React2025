class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const robin = new Developer("Robin", "Wieruch");
console.log(robin.getName());

const piyush = new Developer("Piyush", "Bhatt");
console.log(piyush.getName());

const foo = ["one", "two", "three"];
const [red, green, blue, black] = foo;

console.log(red);
console.log(green);
console.log(blue);

let [a, b] = [10, 20];
[b, a] = [a, b];
console.log(a);
console.log(b);
