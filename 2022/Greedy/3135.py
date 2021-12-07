#탐 : 최선의 경우를 만드는방식이 탐욕법에 가깝다고 생각이듬
#정 : A수를 재배열하는것이라 사용가능할듯함
#이 : 이진탐색(중간을 자르는경우)를 생각할수 없음
#디 : 재귀도 필요가 없음
#비 : 최단경로등이 그래프로 표현안되어있음
#다 : 캐싱 없음

#idea : 사이에있으면 1번을 소모하여 넣고 차이만큼을 더해주면된다.
#result : 오답 예시는 전부정답 이후 채점시 오답 반례를 못찾음(정답률 59%)


AB = list(map(int,input().split(" ")));
asc = False;
desc = False;
if(AB[0] < AB[1]):
    asc = True;
else:
    desc = True;
N = int(input());
isBetween = False;
between = [];
saved = [];

for i in range(N):
    betweenInput = int(input());
    saved.append(betweenInput);
    if(asc):
        if(betweenInput > AB[0] and betweenInput <= AB[1]):
            between.append(betweenInput);
    elif(desc):
        if(betweenInput < AB[0] and betweenInput >= AB[1]):
            between.append(betweenInput);

distance = -1;
selectNum = -1;
if(asc):
  distance = AB[1];
else:
  distance = AB[0];

for i in between:
  if(asc):
    tmp = AB[1] - i;
    if(distance > tmp):
      distance = tmp;
      selectNum = i;
  elif(desc):
    tmp = i - AB[1];
    if(distance > tmp):
      distance = tmp;
      selectNum = i;
answer = 0;
if(selectNum == -1):
  if(asc):
    answer = AB[1] - AB[0];
  elif(desc):
    answer = AB[0] - AB[1];
else:
  answer = distance + 1

print(answer);


  

# print(AB,N,saved);