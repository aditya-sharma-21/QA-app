const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = require('./quesions')

var answerSchema = new Schema({
    answers : {
        type: String,
        required: true
    },
    questions : [ questionSchema ]
}, {
    timestamps: true
});

const Answers = mongoose.model("Answer", answerSchema)

module.exports = Answers;