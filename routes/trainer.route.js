import express from 'express';
import Trainer from '../models/trainer.model'

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.status(200).send(trainers)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default router