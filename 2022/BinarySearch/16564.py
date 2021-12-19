#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
NK = list(map(int,input().split(" ")));
level = [];
for i in range(NK[0]):
  level.append(int(input()));

midValue = sum(level)/len(level);
need = 0;
needCount = 0;
for i in level:
  if i < midValue:
    needCount += 1;
    need += (midValue - i);
print(sum(level),len(level),midValue)
print(need);
