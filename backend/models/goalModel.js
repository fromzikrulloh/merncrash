const mongoose = require('mongoose')
const {Schema} = mongoose

const goalsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    text: {
        type: String,
        require: [true, 'Please enter a text']
    }
}, {timestamps: true})

module.exports = mongoose.model('Goal', goalsSchema)