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

#Code
import collections;
rck = list(map(int,input().split(" ")));
arr = [];
arr.append(list(map(int,input().split(" "))))
arr.append(list(map(int,input().split(" "))))
arr.append(list(map(int,input().split(" "))))
check = arr[rck[0]-1][rck[1]-1] == rck[2] ;
second = 0;
answer = -1;
for i in arr:
  while(100 - len(i)>0):
    i.append(0);
def checkMaxCol():
  tmp = -1;
  for i in arr:
    if i.index(0) > tmp :
      tmp = i.index(0);
  return tmp;
def isRC():
  ret = -1;
  if len(arr) >= checkMaxCol():
    ret = "R";
  else:
    ret = "C";
  return ret;


while(True):
  if(check or second > 100):
    if(check):
      answer = second 
    break;
  second += 1;
  rc = isRC();
  ##R연산
  if(rc == "R"):
    changeRow = arr[rck[0]-1];
    zeroIndex = changeRow.index(0);
    rawArr = collections.Counter(changeRow[:zeroIndex]);
    sortArr = [];
    for ele in rawArr:
      tmp = (ele,rawArr[ele]);
      sortArr.append(tmp);
    print(sortArr);
    pass;
  ##C연산
  elif(rc=="C"):
    pass;
  

# print(answer);