import { Schema, model } from 'mongoose'

const trainerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    courses: [String]
})

const Trainer = model("trainer", trainerSchema);

export default Trainer;



