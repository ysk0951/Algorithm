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
NH = list(map(int,input().split(" ")));
hurdle = [];
arr = [0 for i in range(NH[1])];
for i in range(NH[0]):
  hurdle.append(int(input()));
idx =0;
for i in hurdle:
  #홀수
  if(idx%2 == 0):
    for j in range(i):
      arr[j] += 1;
  #짝수
  else:
    for j in range(i):
      arr[NH[1]-1-j] +=1;
  idx += 1;

arr.sort();
minValue = min(arr);
count = bisect_left(arr,minValue+1);
print(str(minValue) + " "+str(count));

#Case
'''
6 7
1
5
3
3
5
1
>>>
2 3
'''

n, h = map(int, input().split())

down = [0] * (h + 1)  # 석순
up = [0] * (h + 1)  # 종유석

min_count = n  # 파괴해야 하는 장애물의 최소값
range_count = 0  # 최소값이 나타나는 구간의 수

for i in range(n):
    if i % 2 == 0:
        down[int(input())] += 1
    else:
        up[int(input())] += 1

for i in range(h - 1, 0, -1):
    down[i] += down[i + 1]
    up[i] += up[i + 1]

for i in range(1, h + 1):

    if min_count > (down[i] + up[h - i + 1]):
        min_count = (down[i] + up[h - i + 1])
        range_count = 1
    elif min_count == (down[i] + up[h - i + 1]):
        range_count += 1

print(min_count, range_count)

## 40% faile : 시간초과
## 누적합에 대한 문제