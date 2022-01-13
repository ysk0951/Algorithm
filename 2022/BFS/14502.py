#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS(bisect) LIS에 대한 아이디어인가
#이 : start를 end쪽으로 절반씩 줄여나가는가? (정렬이 기본)
#디 : 전체루트를 한바퀴 검색하는경우
#비 : 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 기타 그래프 이론(사이클관련)
  # 다익스트라
  # 플로이드워셜
  # 크루스칼

#Code

#문제 풀이과정
'''
1. 벽을 선택한다.
2. 바이러스를 퍼트린다.
3. 바이러스가 퍼지지 않은 안전지역 면적을 구한다.
1~3번의 과정을 벽을 선택하는 모든 경우의 수에 대해서 반복하고, 
마지막에 안전지역의 max값 리턴
'''
 
# input 및 변수선언
 
import copy
import sys
 
input = sys.stdin.readline
 
N, M = map(int, input().strip().split())
NM = []
for i in range(N):
    L = list(map(int, input().strip().split()))
    NM.append(L)
 
dr = [-1,0,1,0] # 위아래 row 단위로 이동
dc = [0,1,0,-1] # 좌우 column 단위로 이동
max_value = 0 # clean 지역의 개수를 return 하기 위한 변수
virus_list = [] # 바이러스 리스트 만들기
for i in range(N):
    for j in range(M):
        if NM[i][j] == 2:
            virus_list.append([i,j])
 
# 벽 선택하기
def select_wall(start,count):
    global max_value
    if count == 3 : # 종료조건, 벽 3개 선택 완료
        sel_NM = copy.deepcopy(NM) # deepcopy로 벽이 선택된 배열 복사
        for num in range(len(virus_list)):
            r, c = virus_list[num]
            spread_virus(r, c, sel_NM)
        safe_counts = sum(i.count(0) for i in sel_NM) # clean 지역 count
        max_value = max(max_value,safe_counts)
        return True
    else :
        for i in range(start, N*M): # 2차원 배열에서 조합 구하기
            r = i // M
            c = i % M
            if NM[r][c] == 0 : # 안전영역인 경우 벽으로 선택가능
                NM[r][c] = 1 # 벽으로 변경
                select_wall(i,count+1) # 벽선택
                NM[r][c] = 0
 
 
def spread_virus(r,c,sel_NM):
    if sel_NM[r][c] == 2:
        # 상하좌우 4방향을 확인하고 범위를 벗어나거나, 벽을만날때까지 반복
        for dir in range(4):
            n_r = r+dr[dir]
            n_c = c+dc[dir]
            if n_r >= 0 and n_c >=0 and n_r < N and n_c < M : # 범위를 벗어나지 않을때
                if sel_NM[n_r][n_c] == 0 :
                    sel_NM[n_r][n_c] = 2
                    spread_virus(n_r,n_c,sel_NM)
 
# 메인
select_wall(0,0)
print(max_value)

#Case
'''
7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 0 0 1 1
0 1 0 0 0 0 0
0 1 0 0 0 0 0
>>>
27
'''