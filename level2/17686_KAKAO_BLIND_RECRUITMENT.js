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
}

// solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II","F-14 Tomcat"])