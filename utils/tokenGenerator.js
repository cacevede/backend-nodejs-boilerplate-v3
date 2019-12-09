const jwt = require('jsonwebtoken');
const { config } = require('../configs/config');

const tokenGenerator = { };

tokenGenerator.generateToken = async (userName, userPassword) => {
    const token = null;
    const payloadTokenData = {
        check : true,
        userName: userName,
        userPassword: userPassword
    };

    try {
        token = await jwt.sign(payloadTokenData, config.authJwtSecret, {
            expiresIn: config.expireTimeToken
        });

        return token;

    } catch (error) {
        return token = null;
    }
};

module.exports = tokenGenerator;