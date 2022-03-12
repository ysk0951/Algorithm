function solution(n, clockwise) {
  var answer = [];
  //최초선언
  for(var i =0 ;i<n ;i++){
    var inner = new Array(n);
    for(var j =0 ;j<n ;j++){
        inner[j] = 0;
    }
    answer.push(inner);
  }
  //정방향
  var dept = 0;
  var maxNum =  n-(2*dept)-1
  var lastMaxNum = n -(2*(dept-1))-1
  var num = dept==0 ? 1 : n-(2*dept) ;  
  var initVal = num;

  console.log(num,initVal,maxNum)
  function doClock(){
    for(var i =0 ;i<n-1 ;i++){
      if(answer[dept][i] ==0 && num <= maxNum){
        answer[dept][i] = num;
        num ++;
      }
    }
    num = initVal;
    for(var i =0 ;i<n ;i++){
      if(answer[i][maxNum] ==0 && num <= maxNum){
        answer[i][maxNum] = num;
        num ++;
      }
    }
    num = initVal;
    for(var i = n ; i > 0 ; i --){
      if(answer[maxNum][i] ==0 && num <= maxNum){
        answer[maxNum][i] = num;
        num ++;
      }
    }  
    num = initVal;
    for(var i = n ; i > 0 ; i --){
      if(answer[i-1][dept] ==0 && num <= maxNum){
        answer[i-1][dept] = num;
        num ++;
      }
    }  
  }
  doClock();
  
  console.log(answer, num)





  //역방향
  return answer;
}

solution(5,true);