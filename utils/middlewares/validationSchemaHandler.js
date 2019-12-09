const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

const schemaValidatorHandler = { };

schemaValidatorHandler.validate = (data, schema) => {
    const { error } = joi.validate(data, schema);
    return error;
};

schemaValidatorHandler.validationHandler = (schema) => {
    return (req, res, next) => {
        const { error } = schemaValidatorHandler.validate(req.body, schema);
        error ? next(boom.badRequest(error)) : next();
    }
};

module.exports = schemaValidatorHandler;