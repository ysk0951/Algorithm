//https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    var sum = 0;
    var len = d.length;
    d.sort(function(a,b){
        return b-a;
    })
    for(let i=0;i<d.length;i++){
        sum+=d[i];
    }
    //합계에서 최대값 빼기
    while(true){
        if(sum > budget){
            sum = sum - d[0];
            d.shift();
            len = d.length;
        }else{
            break;
        }
    }
    var answer = len;
    console.log(answer);
    return answer;
}

solution([1,3,2,5,4],9);
solution([2,2,3,3],10);