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
    let pathStack = [NAMEArr[0]];
    function findeNear(arr){
        //방문해야하는 배열
        arr = arr.filter(v=>{return v.visit ==0 && v.title !== 'A'});
        if(arr.length > 0){
            let middleValue = (arr.length) / 2
            let idxs = arr.reduce(function(a,e){
                a.push(e.idx);
                return a;
            },[]);
            //now Index로 부터 거리
            let temp = [];
            let distance = [];
            idxs.forEach(function(v){
                //앞쪽거리
                let forWard = v-nowIndex;
                //뒤쪽거리
                let backWard = nowIndex-v+idxs.length+1;
                if(forWard <= backWard){
                    distance.push({
                        idx : v,
                        distance : forWard
                    });
                    temp.push(forWard);
                }else{
                    distance.push({
                        idx : v,
                        distance : backWard
                    });
                    temp.push(backWard);
                }
            })
            let min = Math.min.apply(null,temp);
            // answer += min;
            let newWay = temp.findIndex(function(v){
                return v == min;
            });
            let nameIdx = NAMEArr.findIndex(function(v){
                return v.idx ===  arr[newWay].idx;
            })
            pathStack.push(NAMEArr[nameIdx]);
            NAMEArr[nameIdx].visit = 1;
            nowIndex = NAMEArr[nameIdx].idx;
            findeNear(NAMEArr);
        }
    }
    findeNear(NAMEArr);
    pathStack.forEach(function(v){
        answer ++;
        let indexOfAlpah = ALPAHArr.findIndex(obj => obj.title == v.title);
        if(indexOfAlpah >= 13){
            indexOfAlpah = Math.abs(indexOfAlpah-26);
        }
        answer += indexOfAlpah;
    })
    return answer;
}

solution("JAN");