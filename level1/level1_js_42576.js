function solution(participant, completion) {

    // 시간초과 n로직
    // var len = completion.length
    // for(let i=0;i<len;i++){
    //     var person = completion[0];
    //     var index = participant.indexOf(person);
    //     if (index +1) {
    //         participant.splice(index, 1);
    //         completion.splice(0, 1)
    //     }
    // }
    // return participant[0];

    function solution(participant, completion) {
        var answer = '';
        const ps = participant.sort();
        const cs = completion.sort();
        for(let key in ps){
            if(ps[key] !== cs[key]){
                answer = ps[key]
                break;
            }
        }
        return answer;
    }
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
solution(["leo", "kiki", "eden"],["eden", "kiki"])