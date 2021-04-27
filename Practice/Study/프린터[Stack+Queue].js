function solution(priorities, location) {
    //Queue + rimake
    let check = true;
    //Location 이름 붙이기
    let namedPriorities = [];
    let ret = [];
    for(let i=0;i<priorities.length;i++){
        let obj = {};
        obj[i] = priorities[i];
        namedPriorities.push(obj);
    }
    while(true){
        //제일앞 비교로직
        if (namedPriorities.length>0) {
            let now = Number(Object.values(namedPriorities[0]).join(''));
            for (let i = 0; i<namedPriorities.length; i++) {
                let val = Number(Object.values(namedPriorities[i]).join(''));
                console.log(val,now);
                if (val > now) check = false;
            }
        }
        console.log(namedPriorities,check);
        //가장 우선순위가 높은게 아닐시 뒤로 Rotate
        if (!check) {
            namedPriorities.push(namedPriorities[0]);
            namedPriorities.shift();
        }
        // 아닐경우 출력
        else {
            namedPriorities.shift();
            // ret.push(namedPriorities.shift());
        }
        console.log(namedPriorities.length);
        // if(namedPriorities.length==0) break;
        let a = 0;
        if(a>4) break;
        a++;
    }


    // console.log(namedPriorities);
}
solution([2, 1, 3, 2], 2);

/**
 * 순서대로 -> Queue
 * 다시 뒤로 넣습니다 -> While
 * 문장 그대로 풀어보기 !!
 */