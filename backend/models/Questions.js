const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var questionSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const Questions = mongoose.model('Question', questionSchema);

module.exports = Questions;