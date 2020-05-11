const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var questionSchema = new Schema({
    question : {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;