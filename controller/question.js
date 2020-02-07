const Quiz= require('../model/quiz');
const helper= require('../helpers/helper');

exports.insert= async(req,res)=>{
    let success= await Quiz.insert(req.body);
    if(success) {
        res.redirect('question/');
    }else {
        res.redirect('question/insert',{data:req.body});
    }
}

exports.passToView= async(req,res)=> {
    let data= await Quiz.getAll();
    let question= await helper.getRandomQuestion(data);

}

exports.delete= async(req,res)=> {
    let id= req.params.id;
    if(!'id' in req.params) {
        res.redirect('quiz/list');
    }
}

exports.loadInsertView= (req,res)=> {
    res.render('questions/insert');
}

exports.getQuestions= async(req,res)=> {
    let data= await Quiz.getAll();
    console.log(data);
    // let question= await helper.getRandomQuestion(data);
    res.render('questions/all.ejs',{questions:data});
}


