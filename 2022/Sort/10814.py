#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
N = int(input());
cus = [];
for i in range(N):
  arr = input().split(" ");
  arr[0] = int(arr[0]);
  arr.append(i);
  cus.append(tuple(arr));

answer =sorted(cus,key=lambda x :(x[0],x[2]));

for i in answer:
  print(str(i[0])+" "+i[1]);

#정답률 42%