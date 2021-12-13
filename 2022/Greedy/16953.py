#탐 : 최선의 경우를 만드는방식이 탐욕법에 가깝다고 생각이듬 -> 로직파악
#정 : 정렬의 의미가 없음
#이 : 이진탐색(중간을 자르는경우)를 생각할수 없음
#디 : 재귀도 필요가 없음
#비 : 최단경로등이 그래프로 표현안되어있음
#다 : 캐싱 없음

'''
toBe의 마지막 자리를 보고 1이 붙여진뒤에 몇번의 2배가 되었는지 알수있음 > 이렇게 무한히 반복

ex)40021은 1이니 2배가 곱해지지 않은것
4002 까지 만들어진횟수 +1

42는 2번
21 + 1
2 1 + 1
이런식

오답 13 15 같은 경우의수 고려못함
'''
arr = input().split(" ");

answer = 1;
num = int(arr[0]);
toBe = int(arr[1]);

while(True):
  if(toBe == num):
    break;
  if(toBe%2 ==0):
    toBe = toBe//2;
    answer += 1;
  elif(str(toBe)[:-1]=="" or (str(toBe)[:-1]!="-1" and num !=str(toBe)[:-1] )):
    answer = -1;
    break;
  else:
    toBe = int(str(toBe)[:-1]);
    answer += 1;

print(answer);