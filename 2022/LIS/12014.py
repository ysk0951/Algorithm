#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS(bisect)
#이 : 이진트리로 구조화 시켜야하는경우(이진탐색트리)
#디 : 전체루트를 한바퀴 검색하는경우
#비 : 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 기타 그래프 이론(사이클관련)
  # 다익스트라
  # 플로이드워셜
  # 크루스칼

#Code
from bisect import bisect_left;
test = int(input());
case = {};
for i in range(test):
  NK = list(map(int,input().split(" ")));
  price = list(map(int,input().split(" ")));
  case[i] = (NK,price);

answer = [];
for i in range(test):
  eachCase = case[i];
  K = eachCase[0][1];
  price = eachCase[1];
  dp = [];
  for j in price:
    p = bisect_left(dp,j);
    if(p >= len(dp)):
      dp.append(j);
    else:
      dp[p] = j;
  if (len(dp) >= K):
    answer.append(1);
  else:
    answer.append(0);

count =0;
for i in answer:
  count += 1;
  # print(count)
  print("Case #"+str(count));
  print(i);
# print(answer);





#Case
'''
3
10 6
100 50 70 90 75 87 105 78 110 60
6 3
100 90 80 70 60 50
10 4
8 11 9 7 4 6 12 13 5 10
>>>
Case #1
1
Case #2
0
Case #3
1
'''