//https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [];
    for(var i in arr1){
        var row = [];
        for(var j=0;j<arr1[i].length;j++){
            row.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(row)
    }
    console.log(answer);
    return answer;
}

solution([[1,2],[2,3]],[[3,4],[5,6]])