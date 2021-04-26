function solution(n, t, m, p) {
    var answer = '';
    var number = []
    var num = 0;
    for(var i=0;i<m*t;i++){
        var numString = num.toString(n);
        for(let j=0;j<numString.length;j++){
            number.push(numString[j].toUpperCase());
        }
        num += 1;
    }
    for(let i in number){
        if(i%m==(p-1)){
            answer+=number[i];
        }
    }
    answer = answer.substr(0,t);
    return answer;
}

// solution(2,4,2,1);
// solution(16,16,2,1);
// solution(16,16,2,2);