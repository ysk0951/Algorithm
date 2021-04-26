function solution(progresses, speeds) {
/*
*   Stack - Last In, First Out
*   Queue - First In, Fast Out
*   #Idea
*   Each Progress -> Queue
*   Progress End -> Put in Stack
*/
    var answer = [];
    var tmp = [];
    var day = 1;
    var obj = {};
    while (true) {
        for (let i = 0; i < progresses.length; i++) {
            tmp[i] = progresses[i] + (speeds[i]*day);
        }
        var breakPoint = true;
        var tmpForStack = [];
        for(let i =0;i<tmp.length;i++){
            if (tmp[i] < 100) {
                breakPoint = false;
                break;
            } else {
                tmpForStack.push(tmp[i]);
            }
        }
        obj[day] = tmpForStack.length;
        day += 1;
        if(breakPoint) break;
    }
    var tmp = 0;
    for( let key in obj){
        if(obj[key]-tmp>0){
            answer.push(obj[key]-tmp);
            tmp = obj[key];
        }
    }
    return answer;
}

solution([93,30,55],[1,30,5]); //return [2,1]
