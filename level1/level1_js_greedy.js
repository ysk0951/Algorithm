//https://programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
    var answer = 0;
    let arr = [];
    //setting default 1 lost 0 reserve 2
    for(let i=0;i<n;i++){
        arr.push(1);
    }
    for(let i in lost){
        arr[lost[i]-1] -= 1;
    }
    for(let i in reserve){
        arr[reserve[i]-1] += 1;
    }
    let odd = arr.slice(0);
    //인접 비교
    let index =[];
    for(let i=0;i<n;i++){
        if(arr[i]+arr[i+1]==2){
            index.push(i);
        }
    }
    //짝수를 밀기
    for(let i=0;i<index.length;i++){
        if(i%2==0){
            if(arr[i]==2){
                arr[i] -= 1;
                arr[i+1] += 1;
            }else{
                arr[i] += 1;
                arr[i+1] -= 1;
            }
        }
    }
    //홀수를 밀기
    for(let i=0;i<index.length;i++){
        if(i%2!=0){
            if(odd[i]==2){
                odd[i] -= 1;
                odd[i+1] += 1;
            }else{
                odd[i] += 1;
                odd[i+1] -= 1;
            }
        }
    }
    var oddLen =n- odd.filter(n => n ===0).length;
    var evenLen = n-arr.filter(n => n ===0).length;
    if(oddLen>evenLen) answer = oddLen
    else answer = evenLen
    return answer;
}
solution(5,[2,4],[1,3,5])