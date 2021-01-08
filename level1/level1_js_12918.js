//https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    var answer = true;
    let len = s.length;
    if(len==4||len==6){
        for(let i in s){
           if(isNaN(Number(s[i]))) answer = false
        }
    }else answer = false
    console.log(answer);
    return answer;
}

solution('1234')