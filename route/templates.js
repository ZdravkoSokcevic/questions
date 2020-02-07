const router= require('express').Router();

router.get('/header',(req,res)=> {
    res.render('templates/header.ejs');
});

router.get('/footer',(req,res)=> {
    res.render('templates/footer.ejs');
});

router.get('/picture/insert',(req,res)=> {
	res.render('pictures/insert.ejs');
});

module.exports= router;