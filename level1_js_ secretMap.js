//https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

function solution(n, arr1, arr2) {
    let first = [];
    let second = [];
    for(let i=0;i<arr1.length;i++){
        let num = arr1[i];
        let num_bin = num.toString(2).padStart(n,'0');
        let first_inner = [];
        for(let i in num_bin){
            if(num_bin[i]==1){
                first_inner.push("#");
            }else{
                first_inner.push(" ");
            }
        }
        first.push(first_inner);
    }
    for(let i=0;i<arr2.length;i++){
        let num = arr2[i];
        let second_inner = [];
        let num_bin = num.toString(2).padStart(n,'0');
        for(let i in num_bin){
            if(num_bin[i]==1){
                second_inner.push("#");
            }else{
                second_inner.push(" ");
            }
        }
        second.push(second_inner);
    }

    //sum
    let answer = [];
    for(let i in first){
        // first[i]
        // second[i]
        let answer_inner = "";
        for(let j in first[i]){
            if(second[i][j]==" "&&first[i][j]==" "){
                answer_inner += " ";
            }else{
                answer_inner += "#";
            }
        }
        answer.push(answer_inner);
    }
    console.log("first",first);
    console.log("second",second);
    console.log("answer",answer);
    return answer;
}

// solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28])
// solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10])