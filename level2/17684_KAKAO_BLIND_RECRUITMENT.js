function solution(msg) {
    var answer = [];
    var dictionary = {}
    for (var i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65+i)] = i+1;
    }
    for(var i=0;i<msg.length;i++){
        var tmp = msg[i];
        if(i==msg.length-1){
            answer.push(dictionary[tmp]);
        }else{
            for(var j=i+1;j<msg.length;j++){
                tmp += msg[j];
                if(!dictionary[tmp]){
                    dictionary[tmp] = Object.keys(dictionary).length+1
                    i = i+tmp.slice(0,-1).length-1;
                    answer.push(dictionary[tmp.slice(0,-1)])
                    break;
                }else{
                    if(!msg[j+1]){
                        answer.push(dictionary[tmp]);
                        i = i+tmp.length;
                    };
                }
            }
        }
    }
    return answer;
}

// solution("KAKAO");
// solution("TOBEORNOTTOBEORTOBEORNOT");
// solution("ABABABABABABABAB");