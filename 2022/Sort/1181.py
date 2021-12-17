#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
N = int(input());
arr = [];
for i in range(N):
  arr.append(input());

tmp = set(arr);
arr = list(tmp);

arr.sort(key=lambda x:(len(x),x));
for i in arr:
  print(i);

# 정닯률 (41%)
# lambda 는 기본이 사전순배열이다.