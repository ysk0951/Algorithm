#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
N = input().split(" ")
A = input().split(" ")
B = input().split(" ")
A.sort();
B.sort();
answer = [];
print(A);
print(B);
for a in A:
  if a not in B:
    answer.append(a);

print(len(answer));
if len(answer) > 0:
  print(" ".join(answer));

#시간초과 Nlog로 분산필요