//REF ::https://programmers.co.kr/learn/courses/30/lessons/42860
function solution(name) {
    let answer = 0;
    let ALPAH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ALPAHArr = [];
    let NAME = name.split("");
    let NAMEArr = [];
    ALPAH = ALPAH.split("");
    ALPAH.forEach(function(v,idx){
        ALPAHArr.push({
            idx : idx+1,
            title : v
        });
    });
    NAME.forEach(function(v,idx){
        NAMEArr.push({
            idx : idx+1,
            title : v
        })
    })
    // console.log(ALPAHArr);
    console.log(NAMEArr);
    return answer;
}

solution("JEROEN");