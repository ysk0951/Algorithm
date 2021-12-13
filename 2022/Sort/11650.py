#Idea
'''
잘라서 정렬하기
'''
#반례
'''
시간복잡도가 올라가는것정도 > 튜플 람다로 풀기
'''
#탐 : 자르는것이 적용됨
#정 : 정렬이 주 문제
#이 : 중간점없음
#디 : 재귀없음
#비 : 최단경로없음
#다 : 캐싱 없음
#그 : 플로이드워셜, 크루셜, 다익스트라 없는듯함

#Code
N = int(input());
arr = [];
for i in range(N):
  K = tuple(map(int,input().split(" ")))
  arr.append(K);
tmp = sorted(arr,key=lambda x : (x[0],x[1]));

for i in tmp:
  print(i[0],i[1]);

  #정답 (48%)