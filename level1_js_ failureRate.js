//https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N,stages){
    // N            스테이지의 개수
    // stages       사용자가 멈춰있는 스테이지의 번호가 담긴 배열
    // 실패율       스테이지에 도달했으나 클리어하지 못한 플레이어의수 / 스테이지에 도달한 플레이어의수
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
    //
    //5stage에 머물러 있을시 1,2,3,4는 clear
    //배열 뜯어서 각각의 숫자보다 작은 수를 체크
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    //각 스테이지 셋팅 분자 분모
    let each_stage_failure_1 = [];
    let each_stage_failure_2 = [];
    for(let i=0;i<N;i++){
        each_stage_failure_1.push(0);
        each_stage_failure_2.push(0);
    }
    //배열뜯어서 각 숫자 받기
    for(let i=0;i<stages.length;i++){
        //각각의 숫자
        let each_num = stages[i];
        //모든 단계 성공
        if(each_num > N){
            for(let arr in each_stage_failure_2 ){
                each_stage_failure_2[arr] += 1;
            }
        }else{
        //진행중일시 각 단계별 검사
            for(let j=1;j<=each_num;j++) {
                if(j==each_num){
                    each_stage_failure_1[j-1] += 1;
                    each_stage_failure_2[j-1] += 1;
                }else{
                    each_stage_failure_2[j-1] += 1;
                }
            }
        }

    }
    let failer = [];
    let beforSort = [];
    let answer = [];
    for(let i in each_stage_failure_2){
        failer[i] = each_stage_failure_1[i]/each_stage_failure_2[i];
        beforSort[i] = each_stage_failure_1[i]/each_stage_failure_2[i];
    }

    failer.sort(function(a,b){
        return b-a;
    })
    let pushVal;
    for(let i in failer){
        for(let j=0;j<beforSort.length;j++){
            if(failer[i]==beforSort[j]){
                pushVal = j+1;
                let check = true;
                for(let k=0;k<answer.length;k++){
                    if(answer[k]==pushVal) check= false;
                }
                if(check) answer.push(pushVal)
            }
        }
    }
    console.log("실패율",failer);
    console.log("정렬전",beforSort)
    console.log("순위",answer);
    return answer;
}

solution( 5 , [2, 1, 2, 6, 2, 4, 3, 3]);
solution( 4	,[4,4,4,4,4]);
