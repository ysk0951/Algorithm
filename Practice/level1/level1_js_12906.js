//https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    let answer = [];
    let before = ""
    for(let i in arr){
        console.log(arr[i]);
        if(before != arr[i]){
            answer.push(arr[i]);
            before = arr[i];
        }
    }
    return answer
}

solution([1,1,3,3,0,1,1])