#탐 : 최선의 경우를 만드는방식이 탐욕법에 가깝다고 생각이듬
#정 : A수를 재배열하는것이라 사용가능할듯함
#이 : 이진탐색(중간을 자르는경우)를 생각할수 없음
#디 : 재귀도 필요가 없음
#비 : 최단경로등이 그래프로 표현안되어있음
#다 : 캐싱 없음

#idea : B는 내림차순 A는 오름차순이후 곱셈..? (정렬에 가까운듯)
#result : 정답(정답률 64%)
N = int(input());
A = list(map(int,input().split(" ")));
B = list(map(int,input().split(" ")));

A.sort();
B.sort(reverse=True);

answer = 0;
for i in range(N):
  answer += A[i]*B[i];

print(answer);