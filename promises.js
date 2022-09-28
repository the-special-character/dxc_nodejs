const products1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject("products 1 reject")
         }, 3000)
    })
}

const products2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject("products 2 reject")
         }, 2000)
    })
}

const products3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject("products 3 resolved")
         }, 1500)
    })
}

const getData = async () => {
    try {
        console.time("get data")
        const res = await Promise.any([
            products1(),
            products2(),
            products3()
        ])

        console.log(res);
        console.timeEnd("get data")
    } catch (error) {
        console.log(error);
    }
}

getData()

// promise all
// promise allSettled
// promise race
// promise any 