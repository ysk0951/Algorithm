#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS(bisect) LIS에 대한 아이디어인가
#이 : start를 end쪽으로 절반씩 줄여나가는가? (정렬이 기본)
#디 : 전체루트를 한바퀴 검색하는경우
#비 : 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 기타 그래프 이론(사이클관련)
  # 다익스트라
  # 플로이드워셜
  # 크루스칼

#Code
rows = int(input());
graph = [];
for i in range(rows):
  graph.append(list(input()));

visited = [False];

from collections import deque;

def bfs(graph , node , visited):
  pass;



#Case
'''
5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
>>>
4 3
'''