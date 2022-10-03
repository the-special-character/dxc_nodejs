import { Schema, model } from "mongoose";

const trainerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    courses: {
      type: [String],
      validate: {
        validator: function (data) {
          if (Array.isArray(data) && data.length > 0) {
            return true;
          }
          return false;
        },
        message: props => `${props.value} is not a data!`
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Trainer = model("trainer", trainerSchema);

export default Trainer;
