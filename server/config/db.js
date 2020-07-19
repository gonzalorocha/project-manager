const mongoose = require('mongoose');
require('dotenv').config({ path: '.env'});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB connected');
    } catch (err) {
        console.log(err);
        process.exit(1); //stop the app 
    }
}

module.exports = connectDB;