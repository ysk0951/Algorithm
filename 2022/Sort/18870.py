#Idea
'''

'''
#반례
'''

'''
#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#42.9%
#Code
N = int(input());
X = list(map(int,input().split(" ")))
answer = [];

for index in range(len(X)):
  print(index);
  tmp = 0;
  startNum  = index+1;
  lastNum = len(X);
  for inner in range(startNum,lastNum):
    print(inner,X[inner]);
    if(X[index] > X[inner]):
      tmp += 1;
  print(tmp);
  answer.append(tmp);
print(answer);

##시간초과