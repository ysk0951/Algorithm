//

function solution(num) {
    let count = 0;
    if (num ==1) return 0;
    // let num = n;
    while(true){
        count += 1;
        if (num%2 == 0) num = num/2;
        else if (num%2 != 0) num =(num*3) +1;
        if (num==1) break;
    }
    if(count > 500) count = -1;
    return count;
}

console.log(solution(1));