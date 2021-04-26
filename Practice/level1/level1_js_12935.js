// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    let min = [...arr];
    let answer = [];
    min.sort(function(a,b){
       return b-a;
    })
    min = min[min.length-1];
    for(let i in arr){
        if(arr[i]!=min){
            answer.push(arr[i]);
        }
    }
    if (answer.length==0) answer.push(-1);
    console.log(answer)
    return answer;
}

solution([4,1,2,3]);