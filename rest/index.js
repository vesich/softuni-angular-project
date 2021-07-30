const express = require('express');
const dataBaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

start();

async function start() {
    
    await dataBaseConfig();
    
    const app = express();
    expressConfig(app);
    routesConfig(app);


    app.use('/', (req, res) => {
        res.send('App is working')
    })

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

