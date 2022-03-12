function solution(money, costs) {
  var answer = 0;
  var realMoney = [1,5,10,50,100,500];
  var use = [];
  var cost = [];
  var count = [];

  for(var  i=1;i<costs.length ; i++){
    var tmp = i%2==0 ? 2: 5;
    var bool = costs[i] > costs[i-1]*tmp;
    if(i==1){
      use.push(realMoney[0]);
      cost.push(costs[0])
    }
    if(bool){

    }else{
      use.push(realMoney[i]);
      cost.push(costs[i])
    }
  }

  for(var i=use.length-1; i>=0; i--){
    var div = parseInt(money / use[i]);
    var others = money % use[i];
    money = others ;
    count.push(div);
  }
  count.reverse();
  for(var i=0;i<count.length;i++){
    answer += cost[i] * count[i] ;
  }
  return answer;
}

solution(1999,[2, 11, 20, 100, 200, 600])
// solution(4578,[1,4,99,35,50,1000])
