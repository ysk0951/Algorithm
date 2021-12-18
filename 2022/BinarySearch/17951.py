#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
NK = list(map(int,input().split(" ")));
passA = list(map(int,input().split(" ")));

#규칙적 배분은 정렬과 같다.
passA.sort();
#스테이크 방식 or 양쪽에서 순서대로 > 나눠서 앞에서만 고려하면된다.

ln = len(passA);
midLn = (ln-1)/2;
group = [];
for i in range(NK[1]):
  group.append(0);

print(group)
for i in range(ln):
  if(i > midLn):
    break;
  else:
    pass;