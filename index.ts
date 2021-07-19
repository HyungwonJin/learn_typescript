// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

// const person = {
//     name: "hy",
//     age: 20,
//     gender: "male"
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const hyung = new Human("hyung", 20, "male");

const sayHI = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHI(hyung));