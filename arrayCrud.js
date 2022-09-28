const arr = [1,2,3,4,5];

const [,...rest] = arr;

console.log(rest);

// const [,,,a] = arr;

// console.log(a);

// console.log(a);
// console.log(b);
// console.log(c);

// const index = 2;


// const newArr1 = [...arr.slice(0, index), ...arr.slice(index + 1)];

// console.log(newArr1);


// immutable

// const newArr = [0, ...arr, 6];



// console.log(newArr);



// mutable

// add the data at end
arr.push(6);

// remove data from end
arr.pop()


// add data at begining
arr.unshift(0)

// remove data from begining
arr.shift()

// arr.splice(2, 0, 6, 7)

arr.splice(2, 1, 6)

console.log(arr);

// immutable

// const arr1 = ['a', 'b', 'c', 'd'];

// const index1 = 2;

// const newArr2 = [
//     ...arr1.slice(0, index1),
//     'bb',
//     ...arr1.slice(index1),
// ]


// console.log(newArr2);

// const index2 = 1;

// const newArr3 = [
//     ...arr1.slice(0, index2),
//     'ab',
//     ...arr1.slice(index2 + 1),
// ]

// console.log(newArr3);


// immutablly

// add "bb" at 2nd index

// replace b with "ab"

