const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLenght: 6,
        required: true,
    },
    password: {
        type: String, 
        minLenght: 6,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);