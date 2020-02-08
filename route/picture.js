const router= require('express').Router();
const PictureController= require('../controller/picture');

router.get('/', PictureController.getRandomImages);

router.get('/insert', PictureController.loadInsertView);
router.post('/insert', PictureController.insert);

module.exports= router;