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

##이진탐색
n, h = map(int, input().split())

down = []
up = []
for i in range(n):
    if i % 2 == 0:
        down.append(int(input()))
    else:
        up.append(int(input()))

down.sort()
up.sort()

min_count = n
range_count = 0
def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2

        if array[mid] < target:
            start = mid + 1
        else:
            end = mid - 1

    return start


for i in range(1, h + 1):
    down_count = len(down) - binary_search(down, i - 0.5, 0, len(down) - 1)
    top_count = len(up) - binary_search(up, h - i + 0.5, 0, len(up) - 1)

    if min_count == down_count + top_count:
        range_count += 1
    elif min_count > down_count + top_count: # 현재 범위가 새로운 최소 값이면
        range_count = 1
        min_count = down_count + top_count

print(min_count, range_count)

##전위합
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