const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`MongoDB Connected to ${conn.connection.host}`.cyan.underline)
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB