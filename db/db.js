// sampadadhakal910_db_user
// 0FXwVQOvw2A4yxTM

const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://sampadadhakal910_db_user:0FXwVQOvw2A4yxTM@cluster0.i9tu312.mongodb.net/"

const connectToDatabase = async () => {
    try {
        console.log(`${DB_URL}`)
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Database connection error is ${error.message}`)
    }
}

module.exports = connectToDatabase;