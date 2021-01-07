//https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    let ret = [];
    let answer = "";
    for(let i in s){
        ret.push(s[i].charCodeAt());
    }
    ret.sort(function(a,b){
        return b-a;
    })
    for(let i in ret){
       answer+= String.fromCharCode(ret[i]);
    }
    console.log(answer)
    return answer;
}

solution("Zbcdefg")
