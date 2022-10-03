import * as Joi from 'joi'

const trainerValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    courses: Joi.array().items(Joi.string()).min(1)
});

export default trainerValidationSchema;