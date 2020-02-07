const Category= require('../model/category');

exports.insert= async(req,res)=> {
    // console.log(req.body);
    let success = await Category.insert(req.body);
    if(success) {
        return res.redirect('/category');
    }else {
        return res.redirect('/category');
    }
}

exports.delete= async(req,res)=> {
    let success= await Category.delete(req.params.id);
}

exports.update= async(req,res)=> {
    let success= await Category.update(req.body,req.params.id);
}

exports.all= async(req,res)=> {
    let categories= await Category.getAll();
    console.log(categories);
    if(categories) {
        res.render('category/list.ejs',{categories:categories});
    }
}

exports.loadInsertView= (req,res)=> {
    res.render('category/insert.ejs');
}