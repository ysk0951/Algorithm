function solution(answers) {
    var no1 = [1,2,3,4,5];
    var no2 = [2,1,2,3,2,4,2,5];
    var no3 = [3,3,1,1,2,2,4,4,5,5];
    var cnt1 = 0 ;
    var cnt2 = 0 ;
    var cnt3 = 0 ;
    for(let i=0;i<answers.length;i++){
        if(no1[i%no1.length]==answers[i]) cnt1++;
        if(no2[i%no2.length]==answers[i]) cnt2++;
        if(no3[i%no3.length]==answers[i]) cnt3++;
    }
    var answer = [];
    var max = Math.max(cnt1,cnt2,cnt3);
    if(cnt1==max) answer.push(1);
    if(cnt2==max) answer.push(2);
    if(cnt3==max) answer.push(3);
    console.log(answer)
    return answer;
}

solution([1,3,2,4,2])