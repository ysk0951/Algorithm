//REF :: https://programmers.co.kr/learn/courses/30/lessons/42862
sol(5,[2,4],[1,3,5]);
function sol(n,lost,reserve){
    let student = [];
    for(let i=1;i<=n;i++){
        let isExist = 1;
        if(lost.indexOf(i)>-1){isExist-=1;}
        if(reserve.indexOf(i)>-1){isExist+=1;}
        student.push({
            idx : i,
            isExist : isExist
        })
    }
    console.log(student)
}

