// https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
    var answer = [];
    for(let i=1;i<=n;i++){
        answer.push(x*i);
    }
    console.log(answer);
    return answer;
}
