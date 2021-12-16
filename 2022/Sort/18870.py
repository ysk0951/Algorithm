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

for index in X:
  tmp = 0;
  startNum  = X.index(index)+1;
  lastNum = X[len(X)-1]
  # print(startNum,lastNum);
  for inner in range(startNum,lastNum):
    print(inner);
    print(inner,X[inner]);
    if(X[index] > X[inner]):
      tmp +=0;
  print(tmp);
  answer.append(tmp);
print(answer);