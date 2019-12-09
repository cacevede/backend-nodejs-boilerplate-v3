/** VALIDATE SERVER ROUTES AND HANDLED 404 SERVER ERROR */

const boom = require('@hapi/boom');

const notFoundHandler = { };

notFoundHandler.notFoundHandler = (req, res, next) => {
    const { output: { statusCode, payload } } = boom.notFound();
    res.status(statusCode).json(payload);
};

module.exports = notFoundHandler;