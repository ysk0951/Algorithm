//https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    var week = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");
    var index = new Date('2016-'+a+'-'+b).getDay();
    var answer = week[index];
    return answer;
}
solution(5,24)