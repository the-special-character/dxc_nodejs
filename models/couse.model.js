import { model, Schema, ObjectId } from "mongoose";
import Trainer from './trainer.model'

const couseSchema = new Schema({
  couseName: {
    type: String,
    required: true,
  },
  preReq: {
    type: [String],
  },
  duration: { type: Number, required: true },
  trainer: {
    type: ObjectId,
    ref: Trainer
  }
});


const Course = model("courses", couseSchema);

export default Course
