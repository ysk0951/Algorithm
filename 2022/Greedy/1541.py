#탐
#정 : 정렬하면 안되는문제(순서가 깨지면 괄호가 의미가 없음)
#이 : 탐색문제가 아님
#디 : 그래프로 표현 불가
#비 : 그래프로 표현 불가
#다 : 필요할수도있을듯
#그 : 복합 경로문제로 판단이 되지 않음

#정답률 : 47.7%
#예제를 보니 곱셈은 인식안하는듯.. -값을 기준으로 더해서 가장 큰값을 만들수있으면될것같다.

'''
case1. - + 기준으로 정렬되어있을떄
  c - (a+b) 형태로 만들기
case2. + - 기준으로 정렬되어있을떄
  a+b-c 어떻게 괄호를 배치해도 값은 같아짐
결론. - 나오는 블럭에서의 최대값을 구하면됨
'''

test = list(input());
exp = [];
sub = [];
tmp = '';
for i in range(len(test)):  
  if(test[i]!='-'):
    print(tmp);
    if(len(exp)==0):
      tmp+=test[i];
    else:
      exp.append(tmp);
      tmp = '';

print(exp);

# num =["-","+","(",")"];
# number = '';
# answer = 0;
# accumulate = 0;
# for i in range(len(expresstion)):
#   if expresstion[i] :
#     number += expresstion[i];
#   if expresstion[i] in num:
#     if answer ==0:
#       answer = int(number);
#       number ="";
#     else:
#       if expresstion[i] == 
#       pass;
#   print(answer);
  




