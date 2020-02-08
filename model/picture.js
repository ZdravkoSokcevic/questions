const db= require('./database');


const Picture= {
    insert: path=> {
        return new Promise((res,rej)=> {
            let query="INSERT INTO images (path) VALUES (?)";
            db.query(query,[path],(err,success)=> {
                if(err)
                    rej(err);
                else res(success);
            });
        });
    },
    loadAll: images=> {
        return new Promise((res,rej)=> {
            let query="SELECT * FROM images";
            db.query(query,[],(err,data)=> {
                if(err)
                    rej(err);
                else res(data);
            });
        });
    }
}


module.exports= Picture;