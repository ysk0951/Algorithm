function solution(info, query) {
    var table = [];
    var answer = [];
    //전처리
    for(let i=0;i<info.length;i++){
        var row = info[i].split(' ');
        //Array
        table.push(row);
    }
    //search
    for(let i=0;i<query.length;i++){
        var search = query[i].split(" ").filter(function(o){
            return o!=="and"
        });
        var overScore = [];
        for(let j of table){
            if(Number(j[4]) >= Number(search[4])){
                if((search[0]==j[0]||search[0]=="-")&&
                    (search[1]==j[1]||search[1]=="-")&&
                    (search[2]==j[2]||search[2]=="-")&&
                    (search[3]==j[3]||search[3]=="-")){
                    overScore.push(j);
                }
            }
        }
        answer.push(overScore.length)
    }
    return answer;
}
solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]);