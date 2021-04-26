//https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    var answer = sum/arr.length;
    return answer;
}

solution([1,2,3,4]	)