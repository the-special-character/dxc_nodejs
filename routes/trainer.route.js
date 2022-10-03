import express from 'express';
import TrainerController from '../controller/trainer.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import trainerValidationSchema from '../validators/trainer.validator';

const router = express.Router()

router.get("/", TrainerController.fetchTrainers)

// route middleware....
router.post("/", validationMiddleware(trainerValidationSchema), TrainerController.addTrainer)

router.put("/:id",validationMiddleware(trainerValidationSchema), TrainerController.updateTrainer)

export default router