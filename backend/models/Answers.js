const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = require('./Questions')

var answerSchema = new Schema({
    answer : {
        type: String,
        required: true
    },
    question : {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
}, {
    timestamps: true
});

const Answers = mongoose.model("Answer", answerSchema)

module.exports = Answers;