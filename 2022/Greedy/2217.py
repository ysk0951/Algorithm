'''
순차 점검 프로세스 각각 10문제씩 돌면서 정답률 30%까지 접근
탐 : 탐욕법에 의한 풀이인가? O -> 최선의 선택논리를 구해야함
    정답률 43% 수준
정 : 정렬에 의한 풀이인가? 
이 : 이진탐색(중간분할)이 포함된 문제인가?
D : DFS적요소가 있는가?
B : DFS적요소가 있는가?
다 : Caching을 사용하여 단순화가 필요한 문제인가? 
dp로 풀수있을수도 Caching..가능
그 : 기타그래프이론(다익스트라, 플로이드워셜, 크루스칼)의 관한 문제인가?
'''

#idea : 정렬후 단일 최대값과 병렬 최대값 비교후 최대값 셋팅(...dp?)
#결과 : 논리는 정답(질문게시판 문의), 결과는 시간초과(테스트케이스가 더 없음. 문제 자체가 오류가있음)
import sys
N = int(sys.stdin.readline());

weight = [];

for i in range(N):
    weight.append(int(sys.stdin.readline()));

weight = weight[::-1];

#단일무게 최대값

max = weight[0];


for i in weight:
    index = weight.index(i)
    if (weight[index]*(index+1)>max):
        max = weight[index]*(index+1);

print(max);
