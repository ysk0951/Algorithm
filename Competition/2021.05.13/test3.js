//0앞으로 밀기

function solution(s) {
    var answer = [];
    for(let i=0;i<s.length;i++){
        var test = s[i];
        var len = test.length;
        while(true){
            var check = eachFn(test);
            if(len - check.length > 0){
                for(let l=0;l<len-check.length;l++){
                    check = "0" + check;
                }
            }
            if(!check || check == test){
                answer.push(test);
                break;
            }else{
                test = check;
            }
        }
    }
    return answer;
}

function eachFn(ele){
    var test = ele.indexOf('110');
    var eleLen = ele.length;
    var ele = ele.substring(0,test) + ele.substring(test+3,ele.length)
    var tmp = 0;
    var ret = false;
    if(test > -1){
        for(let i=0;i<ele.length;i++){
            var joinValue = ele.slice(0, i) + '110' + ele.slice(i)
            // if( abs > 0 ){
            //     for(let k=0;k<abs;k++){
            //         joinValue = "0" + joinValue;
            //     }
            // }
            var tmpChange =  parseInt([ele.slice(0, i), '110', ele.slice(i)].join(''),2);
            if (i ==0) tmp = tmpChange;
            if(tmp >= tmpChange){
                tmp = tmpChange;
            }
        }
       ret = tmp.toString(2);
    }
    return ret;
}

// solution(	["1110", "100111100", "0111111010"]	);
solution(	["0111111010"]	);