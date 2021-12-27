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
'''
from bisect import bisect_left;

dpA = [];
dpB = []
N = int(input());
A = list(map(int,input().split(" ")))
B = list(map(int,input().split(" ")))

for i in A:
  p = bisect_left(dpA,i)
  if(len(dpA) <= p):
    dpA.append(i)
  else:
    dpA[p] = i;

for i in B:
  p = bisect_left(dpB,i)
  if(len(dpB) <= p):
    dpB.append(i)
  else:
    dpB[p] = i;

set1 = set(dpA)
set2 = set(dpB)
answer = set1.intersection(set2);
print(len(answer))
'''

import bisect
input()
d,q=dict.fromkeys(map(int,input().split()),0),[]
for k,i in enumerate(map(int,input().split())):d[i]=k
for k,i in d.items():
    s=bisect.bisect_left(q,i)
    if s!=len(q):q[s]=i
    else:q+=[i]
print(len(q))
#Case
'''
2
1 2
2 1
>>>
1
'''