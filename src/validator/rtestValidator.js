const Joi = require('joi');

const newWordValidator = (word) => {
    const newObject = Joi.object({
        word: Joi.string().min(1).max(255).required(),
        means: Joi.string().min(1).max(255).required(),
        cat: Joi.string().min(1).max(255).required(),
    });
    return newObject.validate(word);
};
