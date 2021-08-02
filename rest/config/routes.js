const usersController = require('../controllers/usersController');
const homeController = require('../controllers/homeController');
const errorController = require('../controllers/errorController');
const carsController = require('../controllers/carsController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/users', usersController);
    app.use('/cars', carsController);
    app.use('*', errorController)
}