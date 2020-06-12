const Question = require("../models/Questions");
const Answer = require("../models/Answers");
const Answers = require("../models/Answers");

exports.getAllAnswers = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        Answer.find({ question: question._id })
          .then(
            (answers) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({question, answers})
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
        // res.statusCode=200,
        // res.setHeader('Content-Type', 'application/json')
        // res.json(question)
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.postAnswers = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        Answer.create({ question: req.params.questionId, answer: req.body.answer })
          .then(
            (answer) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({question, answer})
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.putAnswers = (req, res, next) => {
  res.statusCode = 403;
  res.setHeader("Content-Type", "application/json");
  res.sent("Put Method Not Allowed");
};

exports.deleteAnswers = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        Answer.remove({})
          .then(
            (answer) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({question, answer})
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.getAnswer = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        Answer.findById(req.params.answerId)
          .then(
            (answer) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({question, answer})
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.postAnswer = (req, res, next) => {
  res.statusCode = 403;
  res.setHeader("Content-Type", "application/json");
  res.sent("POST Method Not Allowed");
};

exports.putAnswer = (req, res, next) => {
  Question.findById(req.params.questionId).then((question) => {
    Answer.findByIdAndUpdate(req.params.answerId, { $set: req.body }).then(
      (answer) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({question, answer})
      }
    );
  });
};

exports.deleteAnswer = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        Answer.findByIdAndRemove(req.params.answerId)
          .then(
            (answer) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({question, answer})
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
