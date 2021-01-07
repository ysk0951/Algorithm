function solution(n) {
    var answer = '';
    var ret = [];

    for(let i=0;i<n;i++){
        if(i%2==0) ret.push("수");
        else ret.push("박");
    }
    answer = ret.join("");
    return answer;
}

console.log(solution(4))