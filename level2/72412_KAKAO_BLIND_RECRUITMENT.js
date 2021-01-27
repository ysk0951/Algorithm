function solution(info, query) {
    //------------------------1번풀이 timeOut----------------------------------------------
    // var table = [];
    // var answer = [];
    // //전처리
    // for(let i=0;i<info.length;i++){
    //     var row = info[i].split(' ');
    //     //Array
    //     table.push(row);
    // }
    // console.log(table);
    // //search
    // for(let i=0;i<query.length;i++){
    //     var search = query[i].split(" ").filter(function(o){
    //         return o!=="and"
    //     });
    //     var overScore = [];
    //     for(let j of table){
    //         if(Number(j[4]) >= Number(search[4])){
    //             if((search[0]==j[0]||search[0]=="-")&&
    //                 (search[1]==j[1]||search[1]=="-")&&
    //                 (search[2]==j[2]||search[2]=="-")&&
    //                 (search[3]==j[3]||search[3]=="-")){
    //                 overScore.push(j);
    //             }
    //         }
    //     }
    //     answer.push(overScore.length)
    // }
    // return answer;

    // ------------------------2번풀이 ----------------------
    var answer = [];
    var table = {
        "java" : {
            "backend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            },
            "frontend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            }
        },
        "python" : {
            "backend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            },
            "frontend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            }
        },
        "cpp" : {
            "backend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            },
            "frontend" : {
                "senior" : {
                    "pizza" : [],
                    "chicken" : []
                },
                "junior" : {
                    "pizza" : [],
                    "chicken" : []
                }
            }
        }
    };
    //전처리
    for(let i=0;i<info.length;i++){
        var row = info[i].split(' ');
        // console.log(row);
        table[row[0]][row[1]][row[2]][row[3]].push(row[4]);
    }
    //openAll
    var searchAll = [];
    //search
    for(let i=0;i<query.length;i++) {
        var add = [];
        var search = query[i].split(" ").filter(function (o) {
            return o !== "and"
        });
        search.filter(function(o,idx){
           if(o==='-'){
               if(idx==0){
                   search[idx] = ["java","cpp","python"];
               }else if(idx==1){
                   search[idx] =  ["backend", 'frontend'];
               }else if(idx==2){
                   search[idx] =  ['senior','junior'];
               }else if(idx==3){
                   search[idx] = ['pizza', 'chicken'];
               }
           }
        });
        var lan = search[0]
        var position = search[1]
        var year = search[2]
        var food = search[3]
        var score = search[4]
        console.log(search,typeof lan);





        if (table[lan] &&
            table[lan][position] &&
            table[lan][position][year] &&
            table[lan][position][year][food]
        ) {
            var scores = table[lan][position][year][food];
            var cnt = 0;
            for(let j of scores){
                if(Number(j)>=Number(score)){
                    cnt ++;
                };
            }
            answer.push(cnt)
        }
    }
    console.log(answer)
}
solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]);