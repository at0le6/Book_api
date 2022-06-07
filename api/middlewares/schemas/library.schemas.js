import Joi from 'joi';
const schemas = {
    createLibro:Joi.object().keys({
        author: Joi.string().required(),
        cathegory:Joi.string().required(),
        title:Joi.string().required(),
        release:Joi.date().required(),
        pages: Joi.number().greater(1).required(),
        restriction:Joi.boolean().required(),
        physical:Joi.boolean().required(),
        language:Joi.string().required(),
        editorial:Joi.string().required()
    })
};
export default schemas