//https://programmers.co.kr/learn/courses/30/lessons/17682

//1
let trial = [];
//2
let socoreByTrial = [0,1,2,3,4,5,6,7,8,9,10];
//3
let area = function (v, option) {
    if (option == "S") {
        return v*1;
    } else if (option == "D") {
        return v * v;
    } else if (option == "T") {
        return v * v * v;
    }
}
//4,5
let option = function(before,v,option) {
    if (option == "*") {
        for(let i=0;i<trial.length;i++){
            if(trial[i]==before){
                trial[i] = before*2;
            }
            if(trial[i]==v){
                trial[i] = v*2;
            }
        }

    } else if (option == "#") {
        for(let i=0;i<trial.length;i++){
            if(trial[i]==v){
                trial[i] = v*-1;
            }
        }
    }
}

//format
//점수|보너스|옵션
function solution(input){
    let strSliceByBonus = [];
    let nextPush = false;
    for(let i=0;i<input.length;i++){
        strSliceByBonus.push(input[i]);
        if(nextPush){
            strSliceByBonus.push("/");
            nextPush = false;
        }
        if(input[i]=='S'||input[i]=='D'||input[i]=='T'){
            if(input[i+1]=="*"||input[i+1]=="#"){
                nextPush = true;
            }else{
                strSliceByBonus.push("/");
            }
        }
    }

    let splited = []
    for(let i=0;i<strSliceByBonus.length;i++){
        if(strSliceByBonus[i]!='/'){
            splited.push(strSliceByBonus[i]);
        }
        if(strSliceByBonus[i]=='/'){
            console.log("splited",splited);
            let scoreV = 0;
            let bonusV ;
            let optionV ;
            for(let j=0;j<splited.length;j++){
                if(splited[j]=='S'||splited[j]=='D'||splited[j]=='T'){
                    for(let k=0;k<j;k++){
                        scoreV += splited[k];
                    }
                    bonusV = splited[j];
                    optionV = splited[j+1];
                }
            }
            console.log("values",scoreV,bonusV,optionV);
            // let test = this.area.D
            let beforeOption = area(scoreV,bonusV);
            let beforeTrial = trial[trial.length-1];
            trial.push(beforeOption);
            option(beforeTrial,beforeOption,optionV);
            console.log("trial",trial)
            //flush
            splited = [];
        }
    }

    //sum
    let result = 0;
    for(let i=0;i<trial.length;i++){
        result += trial[i];
    }
    console.log("result",result);
    return result;
}

//node level1_js_dartGame.js input
solution(process.argv[2]);

