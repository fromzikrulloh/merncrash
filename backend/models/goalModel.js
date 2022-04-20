const mongoose = require('mongoose')
const {Schema} = mongoose
const goalsSchema = new Schema({
    text: {type: String, require: [true, 'Please provide a text']}
}, {timestamps: true})

module.exports = mongoose.model('Goal', goalsSchema)