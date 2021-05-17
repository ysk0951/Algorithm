function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++){
        answer.push(eachFn(numbers[i]));
    }
    return answer;
}
function eachFn(number) {
    var ret;
    var bit = number.toString(2);
    while(true){
        number++;
        var test = number.toString(2);
        if(testFn(bit,test)<3){
            ret = number
            break;
        }
    }
    return ret;
}
function testFn(bit,test){
    //비교전 자리를 같게
    var stat = Math.abs(bit.length - test.length);
    if(bit.length>test.length){
        for(let i=0;i<stat;i++){
            test = '0' + test;
        }
    }else{
        for(let i=0;i<stat;i++){
            bit = '0'+ bit;
        }
    }
    var diff = 0;
    for(let i=0;i<test.length;i++){
        if(test[i] != bit[i] )  diff ++;
    }
    return diff;
}
