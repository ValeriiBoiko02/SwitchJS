function myNew(constructor, ...args) {
    const obj = {}

    constructor.apply(obj, args)
    obj.__proto__ = constructor.prototype

    return obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return "My name is " + this.name + " and I am " + this.age;
};

const john = myNew(Person, "John", 30);
console.log(john.introduce())

