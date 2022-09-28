// primitive type 

// Number
// bolean
// bigInt
// string
// symbol


// non-premitive

// objects
// arrays

const str = "hello"

const a = 5;

const obj = {
    a: 1,
    b: 2
}

const {a: objA, b} = obj;

console.log(a);
console.log(b);

// create copy immutably
// const newObj = {...obj, b: 5}

// newObj.b = 5;

// console.log(newObj);
// console.log(obj);

const name = "Virat"

const prof = "profession";

const user = {

    name: "Yagnesh",

    age: 33,

    gender: "male",

    profession: "trainer"
}


// immutably

const {profession, gender, ...restData} = user;

console.log(restData);

// const {name: abc} = user;

// console.log(abc);

// console.log(name);

// // console.log(user.name);

const data = {
    a: 1,
    b: 2,
    c: 3
}

// data.d = 4;


// mutable
console.log(data);



// const newData = {...data, d: 4};

// console.log(newData);

// const updateData = {...data, b: 4}

// console.log(updateData);

// const {c, ...rest} = data;

// console.log(rest);

// console.log(data);

const user1 = {
    id: 1,
    name: "yagnesh",
    age: 33,
    SSN: "asdfadsf"
}

const {SSN, ...restUserData} = user1

console.log(restUserData);



