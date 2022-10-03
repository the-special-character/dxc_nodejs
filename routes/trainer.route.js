import express from "express";
import Auth from "../controller/auth.controller";
import TrainerController from "../controller/trainer.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import trainerValidationSchema from "../validators/trainer.validator";

const router = express.Router();

router.get(
  "/",
  Auth.authenticate,
  TrainerController.fetchTrainers
);

// route middleware....
router.post(
  "/",
  [Auth.authenticate, validationMiddleware(trainerValidationSchema)],
  TrainerController.addTrainer
);

router.put(
  "/:id",
  [Auth.authenticate, validationMiddleware(trainerValidationSchema)],
  TrainerController.updateTrainer
);

export default router;
