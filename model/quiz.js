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
            let params=[
                data.question,
                data.first_answer,
                data.second_answer,
                data.third_answer,
                data.fourth_answer,
                data.true_answer
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
            db.query("DELETE FROM quiz WHERE id=?",[id],(err,data)=>{
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
            db.query("SELECT * FROM quiz",(values)=> {
                res(values);
            });
        });
    }
}

module.exports= Quiz;