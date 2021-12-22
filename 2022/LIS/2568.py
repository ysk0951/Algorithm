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

##MyCode - 시간초과
'''
from bisect import bisect_left;
N = int(input());
arr = [];
A = [];
B = [];
for i in range(N):
  arr.append(tuple(map(int,input().split(" "))))
arr.sort(key=lambda x: (x[0]));
for i in arr:
  A.append(i[0]);
  B.append(i[1]);
dp = [];
for i in B:
  p = bisect_left(dp,i);
  if(len(dp) <= p):
    dp.append(i);
  else:
    dp[p] = i;

removeB = list(set(B).difference(dp));
print(len(B) -len(dp));
for i in removeB:
  print(A[removeB.index(i)]);
'''

import sys
# lower_bound : 배열 a의 원소 중, x보다 작거나 같은 값 중 가장 큰 값의 위치 리턴
#               가능한 LIS의 길이를 빠르게 찾기 위함 
def lower_bound(left, right, a, x):
    while left <= right:
        mid = (left + right) // 2
        if a[mid] >= x:
            right = mid - 1
        else:
            left = mid + 1
    return left

n = int(sys.stdin.readline())
a = []
for i in range(n):
    start, end = map(int, sys.stdin.readline().split())
    a.append((start, end))
    
# 인덱스 순으로 정렬
a.sort(key=lambda x : x[0])
d = [a[0][1]]
q = [-1] * n
for i in range(n):
	# 현재 값이 D의 마지막 값보다 큰 경우 - LIS 길이 증가하므로 Q는 1증가, D에는 A[i]를 추가
    if d[-1] < a[i][1]:
        q[i] = max(q) + 1
        d.append(a[i][1])
    else:
    	# x = 현재 수 A[i]가 만들 수 있는 최대 길이 - 1 
        x = lower_bound(0,len(d) - 1, d, a[i][1])
        if a[i][1] > d[x]:
            d[-1] = a[i][1]
        else:
            d[x] = a[i][1]
            q[i] = x + 1

print(n - len(d))
r = len(d)
w = []

# 배열 Q를 뒤부터 순회하여 실제 LIS를 저장한다
for i in range(n - 1, -1, -1):
    if r == 0:
        break
    if q[i] == r:
        w.append(a[i])
        r -= 1
        
# 실제 LIS가 아닌 원소들을 저장
c = []
for i in a:
    if i not in w:
      c.append(i)
      
# 인덱스 순으로 배열 C를 정렬
c.sort(key=lambda x : x[0])
for i in range(n - len(d)):
    print(c[i][0])
#Case
'''
8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6
>>>
3
1
3
4
'''