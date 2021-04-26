// /https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    if(a>b){
        let tmp = a;
        a =b;
        b = tmp;
    }
    let sum = 0;
    for(let i=a;i<=b;i++){
        sum += i;
    }
    console.log(sum);
    return sum;
}

solution(3,5)