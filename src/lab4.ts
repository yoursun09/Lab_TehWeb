interface MyInterface {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}
interface MyExtendedInterface extends MyInterface {
    occupation: string;
    salary: number;
}

const person: MyExtendedInterface = {
    name: "Felicia",
    age: 21,
    email: "felicia.savcenco@iis.utm.md",
    address: "123 Main St.",
    phone: "555-555-5555",
    occupation: "Engineer",
    salary: 5000
};

console.log(person.name);
console.log(person.age);
console.log(person.email);
console.log(person.address);
console.log(person.phone);
console.log(person.occupation);
console.log(person.salary + "$");
