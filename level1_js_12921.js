//https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    let answer = 0;
    for(let i=2;i<=n;i++){
        //사이값 i
        let count = 0;
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count += 1;
            }
        }
        if(count==2){
            answer++;
        }
    }
    return answer;
}

solution(5)