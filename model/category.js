const db= require('./database');

let Category= {
    insert:(data)=> {
        return new Promise((res,rej)=> {
            let query=`
                INSERT INTO category(name)VALUES(?);
            `;
            db.query(query,data.name,(err,result)=> {
                if(err) {
                    rej(err);
                }else {
                    res(result);
                }
            })
        });
    },
    update:(data,id)=> {
        return new Promise((res,rej)=> {
            let query=`
                UPDATE category
                SET name= ?
                WHERE id=?;
            `;
            db.query(query,data.name,(err,data)=> {
                if(err) {
                    rej(err);
                }else {
                    res(data);
                }
            })
        });
    },
    delete:(id)=> {
        return new Promise((res,rej)=> {
            db.query("DELETE FROM category WHERE id=?",[id],(err,data)=>{
                if(err) {
                    rej(err);
                }else {
                    res(data);
                }
            });
        });
    },
    getAll:()=> {
        return new Promise((res,rej)=> {
            db.query("SELECT * FROM category",(values)=> {
                res(values);
            });
        });
    }
}

module.exports= Category;