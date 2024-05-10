//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// PersonName in lowercase
{let personName: string = "Andrew tate";
let lowercaseName: string =personName.toLowerCase();
console.log(lowercaseName);

// PersonName in uppercase

let uppercaseName: string = personName.toUpperCase();
console.log(uppercaseName);

// PersonName in titlecase

let titlecaseName: string = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(titlecaseName);
}