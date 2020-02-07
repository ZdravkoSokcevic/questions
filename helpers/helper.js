// const env= require('custom-env').env();
const request= require('request');
const http= require('http');
// console.log(env);
let apiKey= '';
// const translate= require('google-translate')(apiKey, options);

exports.translate= (string)=> {
    return new Promise((res,rej)=> {
        let s_l= 'auto';
        let t_l= 'sr';
        // let translated= request.get('http://translate.googleapis.com/translate_a/single?client=gtx&sl='+s_l+'&t1='+t_l+'&dt=t&q='+encodeURI(string),(err,response,body)=>{
        //     res(body);
        // });
        let response= http.request('http://opentdb.com/api.php?amount=10',(res)=> {
            res.on('data',data=> {
                console.log(data);
                res(data);
            });
        });
        // let body= response.getBody();
        // res(body);
        // request.get('https://opentdb.com/api.php?amount=10',(request,response,body)=> {
        //     res(body);
        // })
        // translated.on('response',(data)=> {
        //     res(data);
        // });

    });
}