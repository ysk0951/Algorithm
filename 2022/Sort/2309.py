#탐 :
#정 :
#이 :
#디 : 
#비 : 
#다 : 
#그 : 

#Code
arr = []
for i in range(9):
  arr.append(int(input()));
arr.sort();
sumValue = sum(arr);
diff = sumValue-100;
check = [];
for i in arr:
  isExist = diff - i;
  if isExist in arr and i != isExist:
    check.append(i);
    check.append(isExist);
    break;
answer = [];
for i in arr:
  if i not in check:
    answer.append(i);
answer.sort();

for i in answer:
  print(i);