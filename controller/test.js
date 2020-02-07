const helper= require('../helpers/helper');
const request= require('request');
const http= require('http');

let Translate={
    translate: async(req,res)=> {
        let string= req.query.q;
        console.log('doso ovdje');
        let translated= await helper.translate(string);
        // let response= request('https://opentdb.com/api.php?amount=10');
        // console.log(JSON.stringify(response.response));
        
        let object= {
            string:string,
            translate:translated
        }

        res.end(JSON.stringify(object));
    }
}

module.exports=Translate;