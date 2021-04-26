//https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {

    n = n.toString(3);
    var ret = ""
    for(let i=n.length-1;i>=0;i--){
        ret += n[i];
    }
    let answer = 0;
    for(let i in ret){
        answer +=ret[i]*Math.pow(3,ret.length-i-1);
    }
    return answer;
}

solution(45);