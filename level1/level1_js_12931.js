//https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    var answer = 0;
    n = n.toString();
    for(let i in n){
        answer+=Number(n[i]);
    }
    return answer;
}

solution(987);