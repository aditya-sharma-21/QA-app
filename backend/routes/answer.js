const express = require('express');
const bodyParser = require('body-parser')

const answersController = require('../controllers/answersControllers')

const answerRouter = express.Router();

answerRouter.use(bodyParser.json());

answerRouter.route('/')
.get(answersController.getAllAnswers)
.post(answersController.postAnswers)
.put(answersController.putAnswers)
.delete(answersController.deleteAnswers)

answerRouter.route('/:answerId')
.get(answersController.getAnswer)
.post(answersController.postAnswer)
.put(answersController.putAnswer)
.delete(answersController.deleteAnswer)

module.exports = answerRouter;