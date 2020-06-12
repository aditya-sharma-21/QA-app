const Question = require("../models/Questions");

exports.getAllQuerstions = (req, res, next) => {
  Question.find({})
    .then(
      (questions) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(questions);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.postQuestions = (req, res, next) => {
  Question.create(req.body)
    .then(
      (question) => {
        console.log("Question Created :- " + question);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
      },
      (err) => next(err)
    )
    .catch((err) => {
      next(err);
    });
};

exports.putQuestions = (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation is not supported /questions");
};

exports.deleteQuestions = (req, res, next) => {
  Question.remove({})
    .then(
      (question) => {
        console.log("Remove All Questions");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
      },
      (err) => {
        next(err);
      }
    )
    .catch((err) => {
      next(err);
    });
};

exports.getQuestion = (req, res, next) => {
  Question.findById(req.params.questionId)
    .then(
      (question) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
      },
      (err) => {
        next(err);
      }
    )
    .catch((err) => {
      next(err);
    });
};

exports.postQuestion = (req, res, next) => {
  res.statusCode = 403;
  res.end(
    "POST is not supportive in /questions/" + req.params.questionId + "/"
  );
};

exports.putQuestion = (req, res, next) => {
  Question.findByIdAndUpdate(
    req.params.questionId,
    { $set: req.body },
  )
    .then(
      (question) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
      },
      (err) => {
        next(err);
      }
    )
    .catch((err) => {
      next(err);
    });
};

exports.deleteQuestion = (req, res, next) => {
  Question.findByIdAndRemove(req.params.questionId)
    .then(
      (question) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(question);
      },
      (err) => {
        next(err);
      }
    )
    .catch((err) => {
      next(err);
    });
};
