//https://programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {

    let r = [];
    for(let i=0;i<phone_number.length;i++){
        if(i<phone_number.length-4){
            r.push("*");
        }else{
            r.push(phone_number[i]);
        }
    }
    var answer = '';
    answer = r.join("");
    return answer;
}

solution("01033334444");