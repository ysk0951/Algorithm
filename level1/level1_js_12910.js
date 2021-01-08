//https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    for(let i in arr){
        if(arr[i]%divisor==0){
            answer.push(arr[i]);
        }
    }
    answer.sort(function(a,b){
        return a-b;
    });
    if(answer.length==0) answer.push(-1);
    return answer;
}

solution([5,9,7,10],5)