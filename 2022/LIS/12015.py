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
N = int(input());
A = list(map(int,input().split(" ")));
dp = [];
from bisect import bisect_left;

for i in A:
  p = bisect_left(dp,i);
  if(len(dp) <= p):
    dp.append(i);
  else:
    dp[p] = i;

print(len(dp));


#Case
'''
6
10 20 10 30 20 50
>>>
4
'''