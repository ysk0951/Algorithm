//https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    n = n.toString();
    let r = [];
    for(let i=n.length-1;i>=0;i--){
        r.push(Number(n[i]));
    }
    var answer = r;
    return answer;
}

solution(12345);