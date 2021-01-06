//https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {

    var answer = 0;
    var ret = [];
    for(let i=1;i<=n;i++){
        if(n%i==0) ret.push(i);
    }
    for(let i in ret){
        answer += ret[i];
    }
    console.log(answer)
    return answer;
}

solution(12);