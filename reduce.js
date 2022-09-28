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
        name: "deepika",
        age: 19,
        gender: "female",
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

const age = 32;

const ageGroup = Math.floor(age / 10);

console.log(ageGroup);

const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);


const groupByGender = users.reduce((previous, current) => {
    const key = current.gender;

    if(!(previous && previous[key])) {
        previous[key] = []
    }

    previous[key].push(current);

    return previous;
}, {});

const groupByAge = users.reduce((previous, current) => {
    const ageGroup = Math.floor(current.age / 10);
    const key = `${ageGroup}0-${ageGroup}9`;

    if(!(previous && previous[key])) {
        previous[key] = []
    }

    previous[key].push(current);

    return previous;
}, {});

console.log(groupByAge);

// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": [],
//     "70-79": []
// }

console.log(groupByGender);