//https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = '';
    //1,4,7 L
    //3,6,9 R
    //2,5,8,0 가까운손, 거리같다면 hand
    let near = ""
    if (hand == 'right') {
        near = "R"
    } else if (hand == "left") {
        near = "L"
    }
    let position_L = 10;
    let position_R = 12;
    let position_L_target = [0,3];
    let position_R_target = [2,3];
    let target = [];
    for(let i in numbers){
        let n = numbers[i];
        if(n==1||n==4||n==7){
            answer += "L"
            position_L = n;
        }else if(n==3||n==6||n==9){
            answer += "R"
            position_R = n;
        }else{
            //거리계산
            //[3N-2,3N-1*3N] N=1,2,3
            //1을 뺴고 3으로 나눈뒤 몫이 N 나머지가 1,2,0
            //좌표 (나머지,몫)

            let x_L = (position_L-1)%3;
            let y_L =  parseInt((position_L-1)/3);
            if(position_L==0) position_L_target = [1,3];
            else position_L_target = [x_L,y_L];

            //오른손 좌표
            let x_R = (position_R-1)%3;
            let y_R = parseInt((position_R-1)/3);
            if(position_R==0) position_R_target =  [1,3];
            else position_R_target = [x_R,y_R];

            //목표 좌표
            let x_N = (n-1)%3;
            let y_N = parseInt((n-1)/3);
            if(n==0) target =  [1,3];
            else target = [x_N,y_N];

            //거리비교
            let lengthL = Math.abs(position_L_target[0]-target[0])+Math.abs(position_L_target[1]-target[1])
            let lengthR = Math.abs(position_R_target[0]-target[0])+Math.abs(position_R_target[1]-target[1])
            //거리에 의한 값대입
            if(lengthR > lengthL) {
                answer += "L"
                position_L = n;
            }else if(lengthR < lengthL){
                answer += "R"
                position_R = n;
            }else if(lengthR == lengthL){
                if(near == "R"){
                    answer += "R"
                    position_R = n;
                }else if(near == "L"){
                    answer += "L"
                    position_L = n;
                }
            }
        }
    }
    return answer;
}

