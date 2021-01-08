//https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {

    let index = [];
    if(s.length%2==0){
        index.push((s.length/2)-1)
        index.push(s.length/2)
    }else{
        index.push(Math.round(s.length/2)-1);
    }
    let ret = [];
    for(let i in s){
        if(index.length==1){
            if(i!=index[0]) {}else{
                ret.push(s[i])
            }
        }else{
            if(i!=index[0]&&i!=index[1]) {}else{
                ret.push(s[i])
            }
        }
    }
    var answer = ret.join("");
    return answer;
}

solution("qwer");