const Picture= require('../model/picture');
const fs= require('fs');
const path= require('path');
const imagePath= '/../storage/images/';
const formidable= require('formidable');

exports.insert= (req,res)=> {
    const image= req.body;
    let form= new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        // console.log(files);
        let name= files.slika.name;
        let new_path= path.resolve(__dirname+imagePath+ name);
        console.log(new_path);
        fs.rename(files.slika.path, new_path,(err)=> {
            if(err)
                res.end(JSON.stringify(err));
            else {
                // fs.unlink(files.slika.path,()=> {});
                Picture.insert('/storage/'+name)
                    .then(res=> {
                        res.redirect('/picture/insert');
                    })
                    .catch(err=> {
                        res.redirect('/picture/insert');
                    });
            }
        });
    });
    // console.log(image);
    // res.end(JSON.stringify('to je to'));
}

exports.getRandomImages= async(req,res)=> {
    let pictures= await Picture.loadAll();

}

exports.loadInsertView= (req,res)=> {
    res.render('pictures/insert.ejs');
}