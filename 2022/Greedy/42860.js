//REF ::https://programmers.co.kr/learn/courses/30/lessons/42860
/*
idea : 순환구조를 짜고 한 방향으로 달리는것으로 생각한다.
*/
function solution(name) {
    //최초자리에 시작을 0으로 셋팅하기위해서
    let answer = -1;
    let ALPAH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ALPAHArr = [];
    let NAME = name.split("");
    let NAMEArr = [];
    ALPAH = ALPAH.split("");
    ALPAH.forEach(function(v,idx){
        ALPAHArr.push({
            idx : idx+1,
            title : v
        });
    });
    NAME.forEach(function(v,idx){
        let here = idx == 0 ? 1 : 0;
        NAMEArr.push({
            idx : idx+1,
            title : v,
            visit : here
        })
    })
    //NAME ARR의 의 최단거리 -> DFS(재귀) 사용(이동의 가중치가 있음)
    let nowIndex = 1;
    let pathStack = [1];
    function findeNear(arr){
        let idxs = arr.reduce(function(a,e){
            arr = arr.filter(v=>{return v.visit ==0});
            if(e.visit === 0 && e.title !== 'A'){
                a.push(e.idx);
            }
            return a;
        },[]);
        // idx.forEach(function(v){
        //     (v - nowIndex) & arr.length
        // })
        console.log(arr);
        console.log(idxs,arr.length) ;
        // let forward = (nowIndex + 1) > arr.length ? (nowIndex +1)% arr.length: (nowIndex + 1) ;
        // let backward = nowIndex - 1 < 1 ? nowIndex - 1 + arr.length : nowIndex - 1 ;
        // if(arr[forward].title!=='A'&& visit === 0){
        //     nowIndex = forward;
        //     pathQuere.push(forward);
        //     visit = 1;
        // }else if(arr[backward].title!=='A'&& visit === 0){
        //     nowIndex = backward;
        //     pathQuere.push(backward);
        //     visit = 1;
        // }
        // console.log(forward,backward);
    }
    findeNear(NAMEArr);
    // console.log(NAMEArr);
    NAMEArr.forEach(function(v){
        answer ++;
        let indexOfAlpah = ALPAHArr.findIndex(obj => obj.title == v.title);
        if(indexOfAlpah > 13){
            indexOfAlpah = Math.abs(indexOfAlpah-26);
        }
        answer += indexOfAlpah;
    })
    
    return answer;

}

solution("JEROEN");