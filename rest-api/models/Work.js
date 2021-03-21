const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    cathegory: String,
    image: String,
    description: String,
});

module.exports = mongoose.model('Work', workSchema);