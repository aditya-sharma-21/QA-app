const express = require('express');
const bodyParser = require('body-parser')

const answerRouter = express.Router();

answerRouter.use(bodyParser.json());

answerRouter.route('/')
.get((req, res, next) => {
    res.end('GET questions')
})
.post((req, res, next) => {
    res.end('POST questions')
})
.put((req, res, next) => {
    res.statusCode=404
    res.end('PUT questions')
})
.delete((req, res, next) => {
    res.end('DELETE questions')
});

answerRouter.route('/:questionId')
.get((req, res, next) => {
    res.end('GET id')
}) 
.post((req, res, next) => {
    res.statusCode = 404
    res.end('Can not POST')
})
.put((req, res, next) => {
    res.end('PUT method')
})
.delete((req, res, next) => {
    res.end('DELETE metod')
});

module.exports = answerRouter;