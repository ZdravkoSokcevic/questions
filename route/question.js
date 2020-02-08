const router= require('express').Router();
const QuestionController= require('../controller/question');

router.get('/', QuestionController.getQuestions);
router.get('/insert', QuestionController.loadInsertView);
router.post('/insert', QuestionController.insert);
// router.get('/delete/:id', QuestionController.delete);
router.get('/update/:id', QuestionController.loadUpdateView);
router.post('/update/:id', QuestionController.update);


module.exports= router;