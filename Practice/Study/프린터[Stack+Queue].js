function solution(priorities, location) {
    //Queue + rimake
    //Location 이름 붙이기
    let namedPriorities = [];
    let ret = [];
    let a = 0;
    let answer = -1;
    for(let i=0;i<priorities.length;i++){
        let obj = {};
        obj[i] = priorities[i];
        namedPriorities.push(obj);
    }
    while(true){
        //제일앞 비교로직
        let check = true;
        if (namedPriorities.length>0) {
            let now = Number(Object.values(namedPriorities[0]).join(''));
            for (let i = 1; i<namedPriorities.length; i++) {
                if(!namedPriorities[i]) break;
                let val = Number(Object.values(namedPriorities[i]).join(''));
                if (val > now) check = false;
            }
        }
        //가장 우선순위가 높은게 아닐시 뒤로 Rotate
        if (!check) {
            namedPriorities.push(namedPriorities[0]);
            namedPriorities.shift();
        }
        // 아닐경우 출력
        else {
            ret.push(namedPriorities.shift());
        }
        if(namedPriorities.length<1) break;
    }
    for(let i=0;i<ret.length;i++){
        if(Object.keys(ret[i])[0]===String(location)){
            answer = i+1;
        }
    }
    return answer
}
solution([2, 1, 3, 2], 2);

/**
 * 순서대로 -> Queue
 * 다시 뒤로 넣습니다 -> While
 * 문장 그대로 풀어보기 !! 
 */