/** VALIDATE DATABASE CONNECTION */

const { getSequelizeConnection } = require('../../configs/databaseConnections');
const mongoose = require('mongoose');

const databaseConnValidator = { };

databaseConnValidator.testSQLConnection = (res, req, next) => {
    getSequelizeConnection
        .authenticate()
        .then(() => {
            res.status(200).json({
                data: 'Connection to the SQL databse has been established successfully'
            });
        })
        .catch((error) => {
            res.status(500).json({
                data: 'SQL database connection failed',
                error
            });
        });
};

databaseConnValidator.testNoSQLConnection = (res, req, next) => {
    mongoose.connection.on('error', (error) => {
        res.status(500).json({
            data: 'NoSQL database connection failed',
            error
        });
    });
}

module.exports = databaseConnValidator;