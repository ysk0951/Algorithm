//REF :: https://programmers.co.kr/learn/courses/30/lessons/42862

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

