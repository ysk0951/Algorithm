function solution(files) {
    var answer = [];
    var forSort = [];
    var heads = [];
    var numbers = [];
    for (let i in files) {
        var file = files[i];
        var start;
        var end;
        //HEAD NUMBER TAIL
        for (let j = 0; j < file.length; j++) {
            if (typeof start === 'undefined' && !isNaN(Number(file[j]))) {
                start = j;
            }
            if (typeof start !== 'undefined' && !isNaN(Number(file[j]))) {
                end = j + 1;
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
    console.log(numbers);
    const numbers_ = new Set(numbers);
    numbers = [...numbers_];
    console.log(numbers);
    // console.log(forSort);
    var tmp = [];
    var numbertmp = [];
    for (let i in heads) {
        for (let j in forSort) {
            if (heads[i] == forSort[j][2]) {
                tmp.push(forSort[j]);
            }
        }
        // console.log(tmp);
        for (let k in tmp) {
            for (let l in numbers) {
                if (numbers[l] == Number(tmp[k][3])) {
                    numbertmp.push(tmp[k]);
                }
            }
        }
        tmp = [];
    }
    console.log(numbertmp)
    for(let i in numbertmp){
        answer.push(numbertmp[i][1]);
    }
    console.log(answer);
    // console.log(forSort)
    return answer;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
