#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS(bisect) LIS에 대한 아이디어인가
#이 : start를 end쪽으로 절반씩 줄여나가는가? (정렬이 기본)
#디 : 2차원 배열에서 4방면을 모두 검색해야하는경우
#비 : 2차원 배열에서 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 기타 그래프 이론(사이클관련)
  # 다익스트라
  # 플로이드워셜
  # 크루스칼

#Code
M,N,K  = list(map(int,input().split(" ")))
graph = []
for i in range(M) :
  row = []
  for j in range(N):
    row.append(False);
  graph.append(row);

#make Graph
for i in range(K):
  tmp = list(map(int,input().split(" ")));
  xRange = tmp[2] - tmp[0];
  yRange = tmp[3] - tmp[1];
  for j in range(xRange):
    for k in range(yRange):
      xTarget = tmp[3]-k-1 
      yTarget = tmp[2]-j-1
      graph[xTarget][yTarget] = True;

def checkFalse(arr):
  ret = [];
  for idxX, valX in enumerate(arr):
    for idxY, valXY in enumerate(valX):
      if(valXY == False):
        ret.append((idxX,idxY))
  return ret;

def countAnswer(arr):
  ret  = 0;
  for idxX, valX in enumerate(arr):
    for idxY, valXY in enumerate(valX):
      if(valXY == 2):
        ret+=1;
  return ret;
# 넓이를 구분하기 위한 구분값
marking = 2;

#bfs
from collections import deque;
def bfs(x,y,val) :
  global marking
  # graph[x][y] = marking;
  # 북, 동, 남, 서
  dx = [0,1,0,-1] 
  dy = [-1,0,1,0]
  q = deque()
  q.append((y,x))
  while q:
    now = q.popleft()
    for i in range(4): # 4방면 확인
      h = now[0] + dx[i]
      w = now[1] + dy[i]
      if(h >=0  and h < len(graph) and  w >= 0 and  w<len(graph[h]) and graph[h][w] == False) :
        graph[h][w]= marking;
        q.append((h,w));
  marking += 1;
  #print(graph)

#execute
while(len(checkFalse(graph)) > 0):
  target = checkFalse(graph)[0];
  targetX = target[0];
  targetY = target[1];
  bfs(targetX,targetY,marking)
  # marking += 1;

answer = countAnswer(graph);
print(answer)
#Case
'''
5 7 3
0 2 4 4
1 1 2 5
4 0 6 2
>>>
3
1 7 13
'''


