const Joi = require('joi');
let pattern = /^[a-zA-Z][a-zA-Z]*[a-zA_Z]$/;
const newWordValidator = (word) => {
    const newObject = Joi.object({
        word: Joi.string().min(1).max(255).required().regex(pattern),
        means: Joi.string()
            .min(1)
            .max(255)
            .required()
            .regex(
                /^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/
            ),
        cat: Joi.string().min(1).max(255).required().regex(pattern),
    });
    return newObject.validate(word);
};

module.exports = {
    newWordValidator,
};
