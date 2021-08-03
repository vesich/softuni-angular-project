const carService = require('../services/car');
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    //todo import and decorate services
    req.storage = {
       ...carService,
       ...userService
    };

    next();
}