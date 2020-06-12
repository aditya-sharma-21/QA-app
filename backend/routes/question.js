const express = require("express");
const bodyParser = require("body-parser");

const Questions = require("../models/Questions");
const questionsController = require("../controllers/questionsControllers");
const answersController = require('../controllers/answersControllers')

const questionRouter = express.Router();

questionRouter.use(bodyParser.json());

questionRouter
  .route("/")
  .get(questionsController.getAllQuerstions)
  .post(questionsController.postQuestions)
  .put(questionsController.putQuestions)
  .delete(questionsController.deleteQuestions);

questionRouter
  .route("/:questionId")
  .get(questionsController.getQuestion)
  .post(questionsController.postQuestion)
  .put(questionsController.putQuestion)
  .delete(questionsController.deleteQuestion);

questionRouter
  .route("/:questionId/answers")
  .get(answersController.getAllAnswers)
  .post(answersController.postAnswers)
  .put(answersController.putAnswers)
  .delete(answersController.deleteAnswers);

questionRouter
  .route("/:questionId/answers/:answerId")
  .get(answersController.getAnswer)
  .post(answersController.postAnswer)
  .put(answersController.putAnswer)
  .delete(answersController.deleteAnswer);

module.exports = questionRouter;
