#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS
#이 : 절반만 계산하였을때 값이 도출되는경우
#디 : 전체루트를 한바퀴 검색하는경우
#비 : 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 기타 그래프 이론
  # 다익스트라
  # 플로이드워셜
  # 크루스칼

#정답률 63.45%

#Code
#1.MyCode  LIS 완전탐색 - 시간초과 O(n^2)
N = int(input());
A = list(map(int,input().split(" ")));
memo = [0 for i in range(N)];

for i in range(N):
  init = 0;
  for j in range(i):
    if(A[i]>A[j]):
      if(init < memo[j]):
          init = memo[j];
  memo[i] = init + 1;

print(max(memo));

#2. Lis Bisect O(nlogn)
from bisect import bisect_left 
#이진탐색 코드, 같은 수일 경우 왼쪽 index를 돌려준다
input()
A = list(map(int, input().split()))
dp = []

for i in A:
    k = bisect_left(dp, i) #자신이 들어갈 위치 k
    if len(dp) <= k: #i가 가장 큰 숫자라면
        dp.append(i)
    else:
        dp[k] = i #자신보다 큰 수 중 최솟값과 대체
print(len(dp))
#Case
'''
6
10 20 10 30 20 50
>>>
4
'''