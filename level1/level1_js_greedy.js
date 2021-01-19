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
    let arr2 = arr.slice(0);

    //인접 비교
    let index =[];
    for(let i=0;i<n;i++){
        if(arr[i]+arr[i+1]==2){
            index.push(i);
        }
    }
    //index 비교
    //case 1 좌측에서 나눠준다.
    for(let i=0;i<index.length;i++){
        if(index[i]+1==index[i+1]){
            index[i+1] = -1;
        }
    }
    for(let i=0;i<index.length;i++){
        if(index[i]!=-1){
            if(arr[i]==2) {
                arr[i] -= 1;
                arr[i + 1] += 1;
            }else{
                arr[i] += 1;
                arr[i + 1] -= 1;
            }
        }
    }

    //인접 비교
    let index2 =[];
    for(let i=0;i<n;i++){
        if(arr2[i]+arr2[i+1]==2){
            index2.push(i);
        }
    }
    console.log(index2)
    //index 비교
    //case 2 우측에서 나눠준다.
    for(let i=index2.length;i>0;i--){
        if(index2[i]==index2[i-1]+1){
            index2[i-1] = -1;
        }
    }
    for(let i=0;i<index2.length;i++){
        if(index2[i]!=-1){
            if(arr2[i]==2) {
                arr2[i] -= 1;
                arr2[i + 1] += 1;
            }else{
                arr2[i] += 1;
                arr2[i + 1] -= 1;
            }
        }
    }
   var oddLen =n- arr.filter(n => n ===0).length;
    var evenLen = n-arr2.filter(n => n ===0).length;
    if(oddLen>evenLen) answer = oddLen
    else answer = evenLen
    return answer;
}
solution(5,[2,4],[1,3,5])