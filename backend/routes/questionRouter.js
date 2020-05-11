const express = require("express");
const bodyParser = require("body-parser");

const Questions = require("../models/quesions");

const questionRouter = express.Router();

questionRouter.use(bodyParser.json());

questionRouter
  .route("/")
  .get((req, res, next) => {
    Questions.find({})
      .then(
        (questions) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(questions);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })
  .post((req, res, next) => {
    Questions.create(req.body)
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
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported /questions");
  })
  .delete((req, res, next) => {
    Questions.remove({})
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
  });

questionRouter
  .route("/:questionId")
  .get((req, res, next) => {
    Questions.findById(req.params.questionId)
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
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST is not supportive in /questions/" + req.params.questionId + "/"
    );
  })
  .put((req, res, next) => {
    Questions.findByIdAndUpdate(
      req.params.questionId,
      { $set: req.body },
      { new: true }
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
  })
  .delete((req, res, next) => {
    Questions.findByIdAndRemove(req.params.questionId)
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
  });

module.exports = questionRouter;
