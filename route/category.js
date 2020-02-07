const router= require('express').Router();
const CategoryController= require('../controller/category');

router.get('/', CategoryController.all);
router.get('/insert', CategoryController.loadInsertView);
router.post('/insert', CategoryController.insert);
router.get('/delete/:id', CategoryController.delete);
router.get('/update/:id', CategoryController.update);


module.exports= router;