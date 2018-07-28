const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleSchema = new Schema({
        title: String,
        images: String,
        id: String,
        count: Number
})


const titleModel = mongoose.model('Title', titleSchema);

module.exports = titleModel;