#탐 : 최선의 경우를 만드는방식이 탐욕법에 가깝다고 생각이듬
#정 : A수를 재배열하는것이라 사용가능할듯함
#이 : 이진탐색(중간을 자르는경우)를 생각할수 없음
#디 : 재귀도 필요가 없음
#비 : 최단경로등이 그래프로 표현안되어있음
#다 : 캐싱 없음

#idea : 잔돈이 배수이기때문에 그리드로 풀수있음 - 배수가 아니라면 DP를 이용해야함
#result : 정답(정답률 61%)

money = int(input());
answer = 0;

money = 1000-int(input());
answer = 0;

def iter(a):
  while(True):
    global money
    global answer
    if(money < a or a <0):
        break;
    money -= a;
    answer+=1;
    
iter(500);
iter(100);
iter(50);
iter(10);
iter(5);
iter(1);

print(answer);
