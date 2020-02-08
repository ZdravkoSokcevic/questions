
const express= require('express');
const path= require('path');
const ejs= require('ejs');
const bodyParser= require('body-parser');
const session= require('express-session');


const app= express();
const TemplatesRouter= require('./route/templates');
const TestController= require('./controller/test');
const QuestionRouter= require('./route/question');
const CategoryRouter= require('./route/category');
const QuizRouter= require('./route/quiz');
const PictureRouter= require('./route/picture');


app.set('view-engine',"ejs");
app.set('views','./public/views/');
app.use(bodyParser());
app.use(session({secret: 'some_secret_session'}));

app.use('/bootstrap', express.static('./public/assets/bootstrap-4.4.1-dist/'));
app.use('/assets', express.static('./public/assets/'));
app.use('/views', express.static('./public/views/'));
app.use('/styles', express.static('./public/styles/'));
app.use('/scripts', express.static('./public/scripts/'));
app.use('/storage', express.static('./storage/'));

app.use('/templates', TemplatesRouter);
app.get('/',(req,res)=> {
	res.render('main.ejs');
});

app.use('/question', QuestionRouter);
app.use('/category', CategoryRouter);
app.use('/quiz', QuizRouter);
app.use('/picture', PictureRouter);

app.get('/translate', (req,res)=> {
	console.log(JSON.stringify(req.query));
	TestController.translate(req,res);
});

app.get('/contact/us', (req,res)=> {
	res.render('contactus.ejs');
});



app.get('/user/add', (req,res)=> {
	res.render('user/insert.ejs');
});


app.listen(8800);