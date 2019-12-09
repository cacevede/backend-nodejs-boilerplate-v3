const { config } = require('../../configs/config');
const boom = require('@hapi/boom');

function withErrorStack (error, stack) {
    if (config.dev) {
        return { error, stack };
    }
    return error;
};

function logErrors (error, req, res, next) {
    console.log(error);
    next(error)
};

function wrapErrors (error, req, res, next) {
    !error.isBoom ? next(boom.badImplementation(error)) : next(error);
};

function errorHandler (err, req, res, next) {
    const { output: { statusCode, payload } } = err;

    res.status(statusCode).json(errorHandler.withErrorStack(payload, error.stack));
};

function catchErrors (fn) {
    return (req, res, next) => {
      return fn(req, res, next).catch(next);
    }
}

module.exports = { 
    withErrorStack,
    logErrors,
    wrapErrors,
    errorHandler,
    catchErrors
};