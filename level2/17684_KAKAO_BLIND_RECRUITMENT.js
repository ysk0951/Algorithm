function solution(msg) {
    var answer = [];
    var dictionary = {}
    for (var i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65+i)] = i+1;
    }
    for(var i=0;i<msg.length;i++){
        var charr = msg[i];
        for(var j=i+1;j<msg.length;j++){
            if(msg[j]){
                charr += msg[j]
                if (typeof dictionary[charr] === 'undefined') {
                    dictionary[charr] = Object.keys(dictionary).length + 1;
                    answer.push(dictionary[charr.slice(0,-1)]);
                    break;
                }
            }
        }
    }
    console.log(dictionary,answer);
    return answer;
}

solution("KAKAO");
// solution("TOBEORNOTTOBEORTOBEORNOT");
// solution("ABABABABABABABAB");