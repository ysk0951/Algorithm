function solution(q) {
    let s = "()"   
    let m = "{}"
    let b = "[]"
    //// declear [ ] 
    var answer = 0;
    var turn = q;
    for(let j in q){
         //회전
        // turn +=q[0];
        let t = q.substring(0,Number(j));
        turn = q.substring(Number(j));
        turn += t;
        //검사
        var test = turn
        while(true){
            if(test.includes(s)){
                var testArr = [];
                testArr = test.split(s);
                test = testArr.join("");
            }else if(test.includes(m)){
                var testArr = [];
                testArr = test.split(m);
                test = testArr.join("");
            }else if(test.includes(b)){
                var testArr = [];
                testArr = test.split(b);
                test = testArr.join("");
            }else{
                break;
            }
        }
        if(test.length==0){
            answer+=1;
        }
    }
    console.log(answer);
    return answer;
}

solution("[](){}");