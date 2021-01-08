// /https://programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
    s = s+" "
    let space = 0;
    let answer ="";
    for(let i=0;i<s.length;i++){
        if(s[i]==" "){
            let inner = "";
            for(let j=space;j<i;j++){
                inner += s[j];
            }
            space = i;
            inner = inner.trim();
            console.log(inner);
            let inner_result = "";
            for(let k=0;k<inner.length;k++){
                if(k%2==0){
                    inner_result += inner[k].toUpperCase();
                }else{
                    inner_result += inner[k].toLowerCase();
                }
            }
            console.log("result",inner_result);
            answer += inner_result+" "
        }
    }
    answer = answer.slice(0,-1)
    console.log(answer)
    return answer;
}

solution("try hello world");