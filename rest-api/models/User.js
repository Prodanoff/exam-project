const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 6,
        required: true,
    },
    password: {
        type: String, 
        minLength: 6,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);