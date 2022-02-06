// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (const property in person) {
    console.log(property);
    console.log('-------------------------------------');
    console.log(person["name"]);
    console.log(person.age);
    console.log(person[property]);

}