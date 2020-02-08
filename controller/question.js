const Quiz= require('../model/quiz');
const Category= require('../model/category');
let Question= require('../model/quiz');
const helper= require('../helpers/helper');
const session= require('express-session');

exports.insert= async(req,res)=>{
    let success= await Quiz.insert(req.body);
    if(success) {
        res.redirect('/question/');
    }else {
        res.redirect('question/insert.ejs',{data:req.body});
    }
}

exports.passToView= async(req,res)=> {
    let data= await Quiz.getAll();
    let question= await helper.getRandomQuestion(data);
}

exports.delete= async(req,res)=> {
    let id= req.params.id;
    if(!'id' in req.params) {
        res.redirect('quiz/list.ejs');
    }
}

exports.loadInsertView= async(req,res)=> {
    let categories= await Category.getAll();
    // console.log(categories);
    res.render('questions/insert.ejs',{categories:categories});
}

exports.loadUpdateView= async(req,res)=> {
    let id= req.params.id;
    let categories= await Category.getAll();
    if(id!== 'undefined' && id!==null)
    {
        let row= await Question.loadById(id);
        console.log(row);
        res.render('questions/edit.ejs',{data:Object.assign({},row),categories:categories});
    }else {
        res.render('questions/all.ejs');
    }
    
}

exports.update= async(req,res)=> {
    let id= req.params.id;
    let success= await Question.update(req.body, id);
    if(success) 
    {
        res.redirect('/question');
    }else {
        res.redirect('/question/update'+id);
    }
}

exports.getQuestions= async(req,res)=> {
    let data= await Quiz.getAll();
    // console.log(data);
    // let question= await helper.getRandomQuestion(data);
    res.render('questions/all.ejs',{questions:data});
}

exports.getAllQuestions= async(req,res)=> {
    let questions= await Question.getAll();
    console.log(questions.length);
    if(questions==null || questions.length<10) {
        res.redirect('/question/insert');
    }
    let rand_questions= helper.getRandomQuestions(questions);
    // console.log(rand_questions[0].id);
    if(rand_questions==null)
        res.redirect('/question/insert');
    else res.render('quiz.ejs',{questions:rand_questions});
}


