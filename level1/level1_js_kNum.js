//https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let answer = [];
    for(let i in commands){
        let command = commands[i];
        let ret = [];
        for(let j in array){
            if(j>=command[0]-1&&j<=command[1]-1){
                ret.push(array[j]);
            }
        }
        ret.sort(function(a,b){
            return a-b;
        })
        answer.push(ret[command[2]-1])
    }
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	)