#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
NK = list(map(int,input().split(" ")));
levels = NK[0];
addNum = NK[1];

level = [];
for i in range(levels):
  level.append(int(input()));

for i in range(addNum):
  idxMin = level.index(min(level));
  level[idxMin] += 1;

print(min(level))

#시간초과
#46%