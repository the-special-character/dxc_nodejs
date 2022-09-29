import express from "express";
const router = express.Router();

const todos = [{
    id: 1,
    task: "Learn react",
    isDone: false
}]

router.get("/", (req, res) => {
    res.send(todos)
})

router.post('/', (req, res) => {
    console.log(req.body);
    todos.push(req.body);
    res.status(201).send(req.body);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(x => x.id === Number(id));
    todos.splice(index, 1, req.body)
    res.status(201).send(req.body);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(x => x.id === Number(id));
    todos.splice(index, 1)
    res.status(201).send("record deleted successfully");
})

export default router;


