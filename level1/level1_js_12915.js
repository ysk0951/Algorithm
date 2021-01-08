// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    var answer = [];
    var value = [];
    var valueSet = [];
    for (let i in strings) {
        value.push(strings[i][n]);
        value.sort();
    }
    let set = new Set(value);
    valueSet = [...set]
    var fullString = [];
    for (let j in valueSet) {
        var sorted = [];
        for (let i in strings) {
            if (strings[i][n] == valueSet[j]) {
                sorted.push(strings[i]);
            }
        }
        sorted.sort();

        for(let i in sorted){
            fullString.push(sorted[i]);
        }
    }
    return fullString;
}

// solution(["sun","bed", "car"],1);

solution(["abce", "abcd", "cdx"], 2)