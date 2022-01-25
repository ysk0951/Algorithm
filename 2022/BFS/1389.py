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



N,M = list(map(int,input().split(" ")));
RSpace = [];
distanceEach = [ 0 for i in range(0,N)]
for i in range(N+1):
  RSpace.append([ False for i in range(0,N+1)]);
for i in range(N):
  X,Y = list(map(int,input().split(" ")));
  RSpace[X][Y] = True;
  RSpace[Y][X] = True;

for i in len(distanceEach):
  print(i);

def findCount():
  pass;
# print(RSpace);


#Case
'''
5 5
1 3
1 4
4 5
4 3
3 2
>>>
3
'''


