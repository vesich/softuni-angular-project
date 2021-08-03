const express = require('express');
const cors = require('cors');
const auth = require('../middlewares/auth');
const storage = require('../middlewares/storage')
const serviceAuth = require('../services/user');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true
    }));
    app.use(express.urlencoded({ extended: true })); // body-parser
    app.use(express.json())
    app.use(cookieParser())
    app.use(auth());
    app.use(serviceAuth());
    app.use(storage())
}