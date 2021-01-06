//https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let num_ = x.toString();
    let sum = 0;
    for(let i in num_){
        sum += Number(num_[i]);
    }
    var answer = true;
    if(x%sum != 0){
        answer = false;
    }
    return answer;
}

solution(18);