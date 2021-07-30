const mongoose = require('mongoose');

module.exports = async () => {
    try {
       const conn = await mongoose.connect(process.env.CONNECTION_URL , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });

       console.log(`Mongo DB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error with DB connection: ${err.message}`);
        process.exit(1);
    }
}