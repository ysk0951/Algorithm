function solution(priorities, location) {
    
    //Queue
    let check = false;
    let tmp = [];
    let rotate = [];
    for (let i = 0; i < priorities.length; i++) {
        let priority = priorities[i];
        for(let j=i;j<priorities.length;j++){
            if(priorities[j]>priority){
                rotate.push(priority);
            }else{
                tmp.push(priority);
            }
        }
    }
    console.log(tmp,rotate);
    var answer = 0;
    return answer;
}

solution([2,1,3,2],2);

/**
 * 순서대로 -> Queue
 * 
 */