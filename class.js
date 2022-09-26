
const user1 = {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 33,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user2 = {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 28,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// encapsulation

// absraction

// inheritance

// 
// public
// private

// procted
// default


class User {
    static profession = "cricketor"

    constructor(firstName, lastName, age) {
        this.#changeName(firstName, lastName);   
        this.age = age;
    }

    set firstName(value) {
        console.log(value);
        this._firstName = User.firstLetterUpperCase(value)

        console.log(this._firstName);
    }

    get firstName()  {
        return this._firstName;
    }

    // cant use this keyword in static method
    // static properties are available in static method
    static firstLetterUpperCase(value) {
        console.log(this.firstName);
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    #changeName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


class SuperUser extends User {

    constructor() {
        super("Mighty", "God", Infinity)
    }

    // method overriding
    fullName() {
        const parentFullName = super.fullName();
        return `Master ${parentFullName}`
    }
    
}

const su = new SuperUser();

console.log(su.firstName);
console.log(su.lastName);
console.log(su.age);

console.log(su.fullName())



const name = "virat";

console.log(User.firstLetterUpperCase(name));

console.log(User.profession);

const obj1 = new User("yagnesh", "modh", 33);
const obj2 = new User("rohit", "sharma", 28);



console.log(obj1.profession);

console.log(obj2.firstName);


