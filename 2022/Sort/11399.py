# Ref : https://www.acmicpc.net/problem/11399
'''
Idea : 탐정DB 점검
탐 : 탐욕법에 의한 풀이인가? - NO
    탐욕법에 의한 풀이는 순간순간의 작은 판단이 전체적 프로세스의 반복횟수를 줄이는 선택이어야함.
    하지만, 작은판단으로 풀이의 해법을 알수없었음.
정 : 정렬에 의한 풀이인가? - YES
    전체적으로 먼저 오름차순으로 정렬할시 전체프로세스가 간단해지는것으로 판단 되었음.
DF
'''
count = int(input()) ;
time = list(map(int,input().split(" ")));
time.sort();
answer = 0;
for i in range(0,count):
  answer += (count-i)*time[i];
print(answer);
