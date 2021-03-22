const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    category: String,
    image: String,
    description: String,
});

module.exports = mongoose.model('Work', workSchema);