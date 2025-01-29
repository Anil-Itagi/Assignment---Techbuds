// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if DB connection fails
    }
};

module.exports = connectDB;