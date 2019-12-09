const bcrypt = require('bcrypt');
const { config } = require('../configs/config');

const crypter = { };

crypter.encryptPassword = async (plainInPassword) => {
    const hashPassword = await bcrypt.hash(plainInPassword, config.saltCrypt);
    return hashPassword;
};

crypter.comparePasswords = async (inUserPassword, savedUserPassword) => {
    try {
        return await bcrypt.compare(inUserPassword, savedUserPassword);
    } catch (error) {
        console.log(error);
    }
};

module.exports = crypter;
