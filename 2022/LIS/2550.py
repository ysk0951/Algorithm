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
N = int(input());
swichNum = list(map(int,input().split(" ")));
bulbNum = list(map(int,input().split(" ")));
idxForLIS = [];
forSort = [];
dp = [];
for i in range(N):
  idx = swichNum.index(bulbNum[i]);
  idxForLIS.append(idx);
# forSort.sort(key=lambda x : (x[0]));
for i in idxForLIS:
  p = bisect_left(dp,i);
  if(len(dp)<=p):
    dp.append(i);
  elif(len(dp)-1==p):
    dp[p] = i;

answer = []; 
for i in dp:
  answer.append(swichNum[i]);
answer.sort()
answer = list(map(str,answer))
answerText = ' '.join(answer);
print(len(dp))
print(answerText)

#Case
'''
5
2 4 1 5 3
4 5 1 3 2
>>>
3
3 4 5
'''

#실패(47%)
# 반례를 못찾겠음