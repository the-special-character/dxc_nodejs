// const arr = [1, 2, 3, 4, 5, 6];

// let res = false;

// const search = 4;

// const index = arr.length / 2;
// const a1 = arr.slice(0, index);

// const a2 = arr.slice(index);

// console.log(a1);

// console.log(a2);

// if (a2[0] === search) {
//   res = true;
// }

// if (a2[0] > search) {
//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] === search) {
//       res = true;
//       break;
//     }
//   }
// }

// if (a2[0] < search) {
//     for (let i = 0; i < a2.length; i++) {
//         console.log(a2[i]);
//         if (a2[i] === search) {
//           res = true;
//           break;
//         }
//       }
// }


// // O(1)
// console.log(res);

// // console.log(arr.length / 2);

// let result = false;

// // O(N)
// // O(logN) > 1  < N
// // O(1)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === 4) {
//     result = true;
//     break;
//   }
// }

// console.log(result);

const users = [
  {
    id: 1,
    name: "virat",
    age: 30,
    gender: "male",
  },
  {
    id: 2,
    name: "rohit",
    age: 32,
    gender: "male",
  },
  {
    id: 3,
    name: "alia",
    age: 19,
    gender: "female",
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
    gender: "male",
  },
  {
    id: 6,
    name: "amitabh",
    age: 74,
    gender: "male",
  },
];

// get all the record whoes age is > 25

// > 1 &  N < O(logN)
const index = users.findIndex((x, i) => {
    console.log(i);
    if(x.name === "rohit") {
        return true;
    }
    return false;
})

// O(logN)
const isRohitExist = users.some((x, i) => {
    console.log(i);
    if(x.name === "rohit") {
        return true;
    }
    return false;
})

// O(N)
const isEveryAdult = users.every((x, i) => {
    console.log(i);
    if(x.age > 18) {
        return true;
    }
    return false;
})

console.log(isEveryAdult);

console.log(isRohitExist);

// O(logN)
const rohitInfo = users.find((x, i) => {
    console.log(i);
    if(x.name === "rohit") {
        return true;
    }
    return false;
})

// O(N)
const maleRecords  = users.filter((x, i) => {
    console.log(i);
    if(x.gender === "male") {
        return true;
    }
    return false;
})

console.log(index);
console.log(rohitInfo);
console.log(maleRecords);

