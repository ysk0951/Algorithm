//REF :: https://programmers.co.kr/learn/courses/30/lessons/42862
/*
Idea 
1. 완전탐색으로 순회하도록 유도된 문제인가? -> NO
2. 탐욕법(일부분의 최적의선택이 최적의 해일수있는가?) -> 
    YES : 힌트는 체격순으로 순번을 매겼다는것 앞에서부터 순차적으로 비교하면 가능하다는 아이디어
3. 그래프(DFS,BFS)로 표현하는 문제인가? -> NO
*/
function solution(n,lost,reserve){
    let student = [];
    let cnt = 0;
    for(let i=1;i<=n;i++){
        let isExist = 1;
        if(lost.indexOf(i)>-1){isExist-=1;}
        if(reserve.indexOf(i)>-1){isExist+=1;}
        student.push({
            idx : i,
            isExist : isExist
        })
    }
    student.forEach(function(v,idx){
      if(v.isExist == 0){
        if(student[idx-1]&&student[idx-1].isExist>1){
            student[idx-1].isExist -= 1;
            v.isExist += 1;
        }else if(student[idx+1]&&student[idx+1].isExist>1){
            student[idx+1].isExist -= 1;
            v.isExist += 1;
        }
      }
    })
    student.forEach(function(v,idx){
        if(v.isExist > 0){cnt ++;}        
    })
    return cnt;
}

