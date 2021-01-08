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
    // 최대값을 구하려면 5개단위로 봐야한다.
    for (let i in arr){
        if(arr[i]==0){
            //한쪽만 줄수있는경우에는 한쪽에서 받으면된다.
            console.log(arr[i-1]==2&&arr[i+1]==2,i,typeof i,arr[i-1],arr[i+1]);
            if((arr[i-1]==2&&arr[i+1]!=2)||(arr[i-1]!=2&&arr[i+1]==2)){
                if(arr[i-1]==2){
                    arr[i]+=1;
                    arr[i-1]+=1;
                }else if(arr[i+1]==2){
                    arr[i]+=1;
                    arr[i-1]+=1;
                }
            //둘다 줄수있는경우에는 한쪽으로 더 나아가서 상황을 고려해야됨.
            }else{
                //양쪽다 필요가 없는경우 그냥 앞에서 받기
                if(arr[i-2]==1&&arr[i+2]==1){
                    arr[i] +=1;
                    arr[i-1] -=1;
                //양쪽다 필요한경우
                }else if(arr[i-2]==0&&arr[i+2]==0){
                    arr[i-2] +=1;
                    arr[i-1] -=1;
                    arr[i] +=1;
                    arr[i+1] -=1;
                }else{
                    //한쪽만 필요한경우
                    if(arr[i-2]==1){
                        arr[i-1]-=1;
                        arr[i] +=1;
                        arr[i+1]-=1;
                        arr[i+2]+=1;
                    }else if(arr[i+2]==1){
                        arr[i-2]+=1;
                        arr[i-1] -=1;
                        arr[i]+=1;
                        arr[i+1]-=1;
                    }
                }
            }
        }
    }
    console.log(arr);
    let count = 0;
    for (let i in arr){
        if(arr[i]==0) count +=1;
    }
    answer = n-count;
    return answer;
}
solution(5,[2,4],[1,3,5])