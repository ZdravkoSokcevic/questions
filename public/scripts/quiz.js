// console.log(x);
// console.log($);
let questions=[];
let win_count=0;
let game_counter=0;
let TIMER_COUNT=5;
let CLICK_FLAG=0;
let INTERRUPTED=0;
var timer;
let make_question= ()=> {
    if(x.length) {
        return x.pop();
    }else {
        return null;
    }
}
let set_into_dom= (dom, answer)=> {
    dom.question.html(answer.question);
    dom.ans_1.html(answer.first_answer);
    dom.ans_2.html(answer.second_answer);
    dom.ans_3.html(answer.third_answer);
    dom.ans_4.html(answer.fourth_answer);
    dom.score.html(win_count);
    dom.timer.html(0);
}
let display_new_game_modal= ()=> {
    // $('#new_game_modal').modal();
}

let display_result= ()=> {
    // $('#result_modal').modal();
}


window.onload=()=>{
    $('#progress-bar').progressbar({value:30});
    let dom= {
        question: $('#question'),
        ans_1: $('#answer_1'),
        ans_2: $('#answer_2'),
        ans_3: $('#answer_3'),
        ans_4: $('#answer_4'),
        answers: $('.answers'),
        score: $('#score'),
        timer: $('#timer')
    }
    // dom.answers.on('mouseenter',(e)=> {
    //     console.log($(e.target));
    //     $(e.target).css('color','blue');
    // });
    // dom.answers.on('mouseleave',(e)=> {
    //     $(e.target).css('color','white');
    // })
    let question= make_question();
    set_into_dom(dom, question);
    dom.answers.on('click',(e)=> {
        if(CLICK_FLAG==0)
        {
            CLICK_FLAG=1;
            counter=TIMER_COUNT;
            dom.timer.html(counter);
            game_counter++;
            if(game_counter==9)
            {
                display_result();
            }else {
                setTimeout(()=> {
                    if(!INTERRUPTED)
                    {
                        dom.timer.html(0);
                        CLICK_FLAG=0;
                        if($(e.target).attr('data-src')==question.true_answer)
                        {
                            win_count++;
                            question= make_question();
                            console.log(question);
                            set_into_dom(dom,question);
                        }else {
                            question= make_question();
                            set_into_dom(dom,question);
                            // display_new_game_modal();
                        }
                    }

                },4000);
                timer=setInterval(()=> {
                    if(!INTERRUPTED)
                    {
                        counter--;
                        dom.timer.html(counter);
                        console.log('Tajmer '+counter);
                        if(counter==0) {
                            clearInterval(timer);
                            counter=0;
                        }
                    }

                },1000);
        }

        }
    });
    $('#next_question').on('click',()=> {
        game_counter++;
        if(game_counter==9)
        {
            display_result();
        }else {
            counter=1;
            clearInterval(timer);
            question=make_question();
            if(question!==null)
                set_into_dom(dom,question);
            else display_result();
        }

    });

}

