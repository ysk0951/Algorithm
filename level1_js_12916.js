//https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
    var answer = true;
    var count_p = 0;
    var count_t = 0;
    for(var i in s){
        if (s[i] == 'p'||s[i] == 'P') {
            count_p++;
        } else if (s[i] == 'y'||s[i] == 'Y') {
            count_t++;
        }
    }
    if(count_t != count_p) answer = false;
    return answer;
}

solution('pPoooyY');