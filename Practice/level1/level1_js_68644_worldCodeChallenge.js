function solution(numbers) {
    numbers.sort();
    var obj = {}
    for(let i=0;i<numbers.length-1;i++){
        var sum = 0;
        for(let j=i+1;j<numbers.length;j++){
            sum=numbers[i]+numbers[j];
            if(!obj.hasOwnProperty(sum)){
                obj[Number(sum)] = 1;
            }
        }
    }
    return Object.keys(obj).map(Number);
}

console.log(solution([2,1,3,4,1]))