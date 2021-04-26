//https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {

    let answer = [];
    for(let i=0;i<s.length;i++){
        if(s[i]==" ") answer.push(" ")
        else{
            let ascii = s[i].charCodeAt();
            let result = 0;
            //소문자
            if(ascii >= 97 && ascii <= 122){
                result = ascii + n;
                if(result >122) result = result - 26;

            }
            //대문자
            else if(ascii >= 65 && ascii <= 90){
                result = ascii + n;
                if(result >90) result = result - 26;
            }
            let fromChar = String.fromCharCode(result);
            answer.push(fromChar)
        }
    }
    console.log(answer.join(""))
    return answer.join("");
}

solution("a B z",4)
solution("z",1)
solution("AB",1)