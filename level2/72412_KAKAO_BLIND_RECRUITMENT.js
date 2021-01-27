function solution(info, query) {
    var table = {};
    var lan = {"cpp":"0","java":"1","python":"2","-":"3"};
    var work = {"backend":"0","frontend":"1","-":"2"};
    var years = {"junior":"0","senior":"1","-":"2"};
    var food = {"chicken":"0","pizza":"1","-":"2"}
    var searchVal = {};
    var answer = [];
    for(let i=0;i<info.length;i++){
        var row = info[i].split(' ');
        var rowForTable = [];
        var lanE = lan[row[0]];
        var workE = work[row[1]];
        var yearE = years[row[2]];
        var foodE = food[row[3]];
        var score = row[4];
        var code = lanE+workE+yearE+foodE;
        !table[code] ? table[code] = score : table[code] = table[code]+"|"+score
        // table[code] = score
    }
    for(let i=0;i<query.length;i++){
        var search = query[i].split("and");
        var tmp = search[3].split(" ");
        var score = tmp[2];
        var code = lan[search[0].trim()]+work[search[1].trim()]+years[search[2].trim()]+food[tmp[1]];
        var success = [];
        if(table[code]) success = table[code].split("|") ;
        var count = 0;
        for(let i of success){
            if(i>=score) count++;
        }
        console.log(code,score,success,count);
    }
    console.log(table);
    return answer;
}
solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]);