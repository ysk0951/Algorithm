function solution(files) {
    //------------------------------1번풀이 예제는 통과 정확성테스트 불통과---------------------------//
    /*
    var answer = [];
    var forSort = [];
    var heads = [];
    var numbers = [];
    //n^3 로직.. 최악인데 이게 정답으로 통과하나?
    for (let i in files) {
        var file = files[i];
        var start;
        var end;
        //HEAD NUMBER TAIL
        for (let j = 0; j < file.length; j++) {
            if (typeof start === 'undefined' && !isNaN(Number(file[j]))) {
                start = j;
            }
            if (typeof start !== 'undefined' && !isNaN(Number(file[j]))&&file[j]!==" ") {
                if(end>start+4){

                }else{
                    end = j + 1;
                }
            }
        }
        var head = file.substring(0, start).toUpperCase();
        var number = file.substring(start, end);
        heads.push(head);
        numbers.push(Number(number));
        // var tail = file.substring(end,file.length);
        forSort.push(["[index" + i + "]", file, head, number]);
        start = undefined;
        end = undefined;
    }
    heads.sort();
    const heads_ = new Set(heads);
    heads = [...heads_];
    numbers.sort(function (a, b) {
        return a-b;
    });
    const numbers_ = new Set(numbers);
    numbers = [...numbers_];
    var tmp = [];
    var numbertmp = [];
    for (let i in heads) {
        for (let j in forSort) {
            if (heads[i] == forSort[j][2]) {
                tmp.push(forSort[j]);
            }
        }
        for (let l in numbers) {
            for (let k in tmp) {
                if (numbers[l] == Number(tmp[k][3])) {
                    numbertmp.push(tmp[k]);
                }
            }
        }
        tmp = [];
    }
    for(let i in numbertmp){
        answer.push(numbertmp[i][1]);
    }
    return answer;
    */
    //-------------------------------2번쨰 풀이--------------------------------//
    /*var numbers = [];
    var heads = [];
    for (let i in files) {
        var file = files[i];
        var start = undefined;
        var number = "";
        for (let j in file) {
            if (!isNaN(Number(file[j]))) {
                if (typeof start === 'undefined') {
                    start = j;
                }
                number += file[j];
            }
        }
        var head = file.substring(0, start);
        heads.push(head.toUpperCase());
        numbers.push(Number(number));
    }
    // heads.sort();
    var headsSet = heads.filter((ele,idx)=>{
        return heads.indexOf(ele)===idx;
    });
    headsSet.sort();
    var answerKey = [];
    for (let j in heads) {
        for (let k in headsSet) {
            if (headsSet[k] == heads[j]) {
                answerKey.push(k);
            }
        }
    }
    for(let j in numbers){

    }
    console.log(answerKey);
    console.log(heads,headsSet,numbers);*/
    //-------------------------------3번쨰 풀이--------------------------------//
    var data = [];
    for(let i in files){
        var row = {};
        var file = files[i];
        var reg = /[0-9]{1,5}/;
        var number = reg.exec(file);
        var others = file.split(number);
        row["file"] = file;
        row["idx"] = i;
        row["head"] = others[0].toUpperCase();
        row["num"] = number[0];
        row["tail"] = others[1];
        data.push(row);
    }
    data.sort((a, b) => {
        if (b.head > a.head) {
            return -1;
        }else if(b.head==a.head){
            if (Number(b.num) > Number(a.num)) {
                return -1;
            } else if(Number(b.num) == Number(a.num)){
                if(b.idx > a.idx){
                    return -1;
                }
            }
        }
    });
    var answer = [];
    for(let i in data){
        answer.push(data[i].file);
    }
    console.log(answer)
    return answer

}

// solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
// solution(["F-15 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]);
solution(["img9", "img08", "img000007", "img006"]);