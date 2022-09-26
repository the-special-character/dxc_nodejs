const firstName = "Yagnesh";

const lastName = "Modh";

const age = 33;

const gender =  "male";

// modern syntex
const yagneshInfo = {
    firstName,
    lastName,
    age,
    gender,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(yagneshInfo);

console.log(yagneshInfo.fullName());