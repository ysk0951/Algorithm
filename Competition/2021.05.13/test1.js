function solution(left, right) {
    let answer = 0;
    for(let j=0;j<=right-left;j++){
        let test = left+j;
        let oddCheck = divisors(test)%2;
        if(oddCheck==1){
            answer -= test;
        }else{
            answer += test;
        }
    }
    return answer
}
function divisors(integer) {
    var arr = [1];
    for(var i=2; i<integer; i++) {
        if(integer % i == 0) {
        arr.push(i);
        }
    }
    if(integer!=1) arr.push(integer)
    return arr.length;
}

    