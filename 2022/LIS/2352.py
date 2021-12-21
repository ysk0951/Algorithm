#탐 : 당장의 결정이 향후의 수를 줄여줌
#엘 : LIS
#이 : LowerBound ,UpperBound
#디 : 전체루트를 한바퀴 검색하는경우
#비 : 한루트를 끝까지 검새하는경우
#다 : 캐싱이 반복적으로 사용되는경우
#그 : 다익스트라, 플로이드워셜, 크루스칼

#Code
#1 allSearch
# n = int(input());
# connect = list(map(int,input().split()));
# memo = [0 for i in range(n)];
# for i in range(n):
#   maxLine = 0;
#   for j in range(i):
#     if connect[i] > connect[j]:
#       if maxLine < memo[j]:
#         maxLine = memo[j]
#   memo[i] = maxLine +1

# print(max(memo))

#2 BinarySearch
#x를 삽입할 위치
# from sys import stdin
# def lowerbound(line,x):
#   s,e =0 , len(line)-1
#   while s<=e:
#     mid=(s+e)//2
#     if(line[mid]<x):
#       s = mid+1
#     else:
#       e = mid-1
#   return s

# n = int(stdin.readline())
# connect = list(map(int,input().split()));
# line = []
# for x  in connect:
#   if not line or line[-1]<x:
#     line.append(x)
#   else:
#     line[lowerbound(line,x)]=x

# print(len(line))


#Case
'''
6
4 2 6 3 1 5
>>>
3
'''