const router= require('express').Router();
const QuestionController= require('../controller/question');

router.get('/',QuestionController.getAllQuestions);

module.exports= router;