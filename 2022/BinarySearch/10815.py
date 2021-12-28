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
card = list(map(int,input().split(" ")));
card.sort();
M = int(input());
req = list(map(int,input().split(" ")));

print(card)
print(req)
answer = [];
for i in req:
  end = len(card) - 1;
  start = 0;
  idx = -1;
  while start <= end:
    mid = (start + end) //2
    if card[mid] == i:
      idx = mid+1
      break; 
    elif card[mid] > i:
      end = mid -1;
    else:
      start = mid+1;
  if idx > -1:
    answer.append('1');
  else:
    answer.append('0');

print(" ".join(answer))
#Case
'''
5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
>>>
1 0 0 1 1 0 0 1
'''