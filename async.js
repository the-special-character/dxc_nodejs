// javascript is single threaded language

// java
// python

// javascript is using v8 engine (google)

// 3 achieve async programing

// macro QUEUE

// callback



// primise

// generators



// 

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))


// call stack
console.log("start")

// micro Queue
setTimeout(() => { 
    console.log("set timeout")
 }, 0);

 // macro Queue
Promise.resolve("data").then((val) => {
    console.log("promise");
})

//  call stack
console.log("end")



