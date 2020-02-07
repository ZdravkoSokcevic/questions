const Category= require('../model/category');

exports.insert= async(req,res)=> {
    let success = await Category.insert(req.body);
}

exports.delete= async(req,res)=> {
    let success= await Category.delete(req.params.id);
}

exports.update= async(req,res)=> {
    let success= await Category.update(req.body,req.params.id);
}

exports.all= async(req,res)=> {
    let categories= await Category.all();
}

exports.loadInsertView= (req,res)=> {
    res.render('templates/category/insert.ejs');
}