const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: String,
    contact: String,
    sub: String,
    address: String
})

module.exports = mongoose.model('contact', contactSchema);