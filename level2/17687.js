function solution(n, t, m, p) {
    var answer = '';
    var number = []
    for(var i=0;i<t;i++){
        var num = ((p-1)+(m*i)).toString(n);
        console.log(num);
        if(num.length>1){

        }else{
            number.push((p-1)+(m*i));
        }
    }
    console.log(number);
    console.log(answer);
    return answer;
}

solution(2,4,2,1);
solution(16,16,2,1);