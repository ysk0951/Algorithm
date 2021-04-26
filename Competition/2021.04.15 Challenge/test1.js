function solution(absolutes, signs) {
    let answer = 0;
    for(let i in absolutes){
        let add = signs[i] ? absolutes[i] : absolutes[i] * -1;
        answer += add;
    }
    return answer;
}

console.log("test");
solution([4,7,12],[true,false,true]);
// 정수들의 절대값