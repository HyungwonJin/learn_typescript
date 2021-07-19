interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "hy",
    age: 20,
    gender: "male"
}

const sayHI = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHI(person));