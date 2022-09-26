
// Scope

// Global Scope -> Posible
// Function Scope -> Posible
// Block Scope


var a = 1;

console.log(a);

function test() {
    var b = 2;
}

// Block scope is not working

var arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    var newData = 5;
    
}


console.log(newData);


// for (var index = 0; index < arr.length; index++) {
//     setTimeout(function() {
//         console.log(index);
//     }, 0)
// }

// console.log(c);

// console.log(b);