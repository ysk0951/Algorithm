https://programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {
    var answer = '';
    for(let i in seoul){
        if(seoul[i]=="Kim") answer = "김서방은 "+i+"에 있다"
    }
    console.log(answer)
    return answer;
}
solution(["Jane", "Kim"])