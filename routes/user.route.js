import express from "express";
const router = express.Router();

const users = [
    {
        id: 1,
        name: "yagnesh",
        age: 33,
        email: "yagnesh.modh@gmail.com"
    }
]

router.get("/", (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).send(req.body);
})

module.exports = router;
