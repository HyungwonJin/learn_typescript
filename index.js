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
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const hyung = new Human("hyung", 20, "male");
const sayHI = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHI(hyung));
//# sourceMappingURL=index.js.map