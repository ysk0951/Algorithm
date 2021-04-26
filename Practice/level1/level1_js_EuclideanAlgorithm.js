// /https://programmers.co.kr/learn/courses/30/lessons/12940
// Euclidean algorithm
// https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=221133124302&proxyReferer=https:%2F%2Fwww.google.com%2F
function solution(n, m) {
    //gcd
    let first,secound;
    if(n > m) first = n ,secound = m;
    else first= m,secound =n;
    while(true){
        let r =first%secound;
        first = secound;
        secound = r;
        if (secound == 0) break;
    }
    let gcd = first;
    let lcm = n*m/gcd;
    var answer = [gcd,lcm];
    return answer;
}
