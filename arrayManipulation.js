const users = [
    {
        id: 1,
        name: "virat",
        age: 30,
        gender: "male"
    },
    {
        id: 2,
        name: "rohit",
        age: 32,
        gender: "male"
    },
    {
        id: 3,
        name: "alia",
        age: 19,
        gender: "female"
    },
    {
        id: 4,
        name: "alia",
        age: 19,
        gender: "male",
    },
    {
        id: 5,
        name: "taimur",
        age: 08,
        gender: "male"
    },
    {
        id: 6,
        name: "amitabh",
        age: 74,
        gender: "male"
    }
]

const index = 3;

console.log(users[index]);

const updatedUsers = [
    ...users.slice(0, index),
    {
        ...users[index],
        profession:  'actor'
    },
    ...users.slice(index + 1)
]

console.log(updatedUsers);