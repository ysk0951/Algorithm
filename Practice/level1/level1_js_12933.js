//https://programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
    let r = [];
    for(let i in n.toString()){
        r.push(n.toString()[i]);
    }
    r.sort(function(a,b){
        return b-a;
    });
    var answer = Number(r.join(""));
    return answer;
}
solution(118372);