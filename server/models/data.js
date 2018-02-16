const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    origin: String,
    destination: String,
    startDate: String,
    returnDate: String
});


module.exports = mongoose.model('data', dataSchema, 'data');