const usersController = require('../controllers/usersController');
const homeController = require('../controllers/homeController');
const errorController = require('../controllers/errorController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/users', usersController);
    app.use('*', errorController)
}