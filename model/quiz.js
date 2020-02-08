const db= require('./database');

let Quiz= {
    insert:(data)=> {
        return new Promise((res,rej)=> {
            let insert_data=[
                data.question,
                data.first_answer,
                data.second_answer,
                data.third_answer,
                data.fourth_answer,
                data.true_answer
            ];
            let query=`
                INSERT INTO questions
                    (
                        question,
                        first_answer,
                        second_answer,
                        third_answer,
                        fourth_answer,
                        true_answer
                    )
                VALUES
                    (?,?,?,?,?,?);
            `;
            db.query(query,insert_data,(err,result)=> {
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
                UPDATE questions
                SET question=?,
                    first_answer=?,
                    second_answer=?,
                    third_answer=?,
                    fourth_answer=?,
                    true_answer=?
                WHERE id=?;
            `;
            console.log(data);
            let params=[
                data.question,
                data.first_answer,
                data.second_answer,
                data.third_answer,
                data.fourth_answer,
                parseInt(data.true_answer),
                id
            ];
            db.query(query,params,(err,data)=> {
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
            db.query("DELETE FROM questions WHERE id=?",[id],(err,data)=>{
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
            db.query("SELECT * FROM questions",(err,values,fields)=> {
                if(err)
                    rej(err)
                else {
                    let ret_data=[];
                    data= JSON.parse(JSON.stringify(values));
                    // data.forEach(elem=> {
                    //     ret_data.push(elem);
                    // });
                    // console.log(ret_data)
                    res(data);
                }
            });
        });
    },
    loadById: (id)=> {
        return new Promise((res,rej)=> {
            let query=`
                SELECT * 
                FROM questions
                WHERE id=?
            `;
            db.query(query,[id] ,(err,values)=> {
                if(err)
                    rej(err);
                else res(values);
            });
        });
    }
}

module.exports= Quiz;