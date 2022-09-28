// pending
// resolve
// rejected

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         // make server call here
//         //  when ever i get data
//         reject("promise resolve fail")
//     })
// }

// fetchData()
// .then((val) => {
//     console.log(val);
//     // write a logic to print data on screen
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("finally block");
// })

// fetch("http://localhost:3000/login", {
//     method: "POST",
//     body: JSON.stringify({
//         "email": "hey@yagneshmodh.com",
//         "password": "Password1!"
//     }),
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     }
// })
// .then(val => {
//     return val.json()
// })
// .then(json => {
//     console.log(json);
//     fetch("http://localhost:3000/660/products", {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(val => {
//         if(val.ok) {
//             return val.json()
//         } else {
//             throw new Error("Products failed")
//         }
//     })
//     .then(json => {
//         console.log(json);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// const fetchData = async () => {
//   try {
//     const loginRes = await fetch("http://localhost:3000/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email: "hey@yagneshmodh.com",
//         password: "Password1!",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     const loginJson = await loginRes.json();

//     console.log(loginJson);
//     // const productsRes = await fetch("http://localhost:3000/660/products");
//     // const productsJson = await productsRes.json();
//     // if(!productsRes.ok) {
//     //     throw new Error(productsJson);
//     // }
//     // console.log(productsJson)
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// };

// fetchData();

const products1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("products resolved")
         }, 1000)
    })
}

const products2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("products resolved")
         }, 2000)
    })
}

const products3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("products resolved")
         }, 1500)
    })
}

// const cart = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             reject("cart rejected")
//          }, 1000)
//     })
// }

const getData = async () => {
    try {
        console.time("promise")

        const res = await Promise.race([
            products1(),
            products2(),
            products3(),
        ]);

        console.log(res);

    
        console.timeEnd("promise")
    } catch (error) {
        console.log(error);
    }
}

getData();
