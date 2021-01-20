function solution(n, t, m, p) {
    var answer = '';
    var number = []
    var num = 0;
    for(var i=0;i<m*t;i++){
        var numString = num.toString(n);
        console.log(number);
        // if(number.length%m==0&&number.length!=0&&answer.length<t){
        //     answer+=number[p-1];
        //     number = [];
        // }
        if(numString.length==1){
            number.push(numString[0].toUpperCase())
            num++;
        }else{
            number.push((numString[0]).toUpperCase());
            number.push((numString[1]).toUpperCase());
            num++;
        }
    }
    // console.log(answer);
    return answer;

}

// solution(2,4,2,1);
// solution(16,16,2,1);
solution(12,16,2,2);