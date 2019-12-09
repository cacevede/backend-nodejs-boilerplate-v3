/** REQUIRED PROD DEPENDENCIES */
const express = require('express');

/** REQUIRED DEV DEPENDENCIES */
const morgan = require('morgan');

/** REQUIRED PROJECT FILES */
const { config } = require('./configs/config');
const { winstonLogger } = require('./configs/winstonConfig');
const { runServer } = require('./scripts/serverScript');
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler');
const { testNoSQLConnection } = require('./utils/middlewares/databaseConnValidator');

/** INITS */
const server = express();

/** SETS */
server.set('port', config.port || 3005);

/** MIDDLEWARES */
    /** Morgan Instance and Winston Integration */
server.use(morgan('combined', { stream: winstonLogger().stream }));

    /** Body parser set */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

    /** Catch 404 */
server.use(notFoundHandler);

/** START THE SERVER */
runServer(server, server.get('port'));

/** PROCCESS HANDLER ERRORS */
process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});