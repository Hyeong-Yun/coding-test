# n = int(input())
# nums = list(map(int, input().split()))

# def is_prime(x):
#   if x < 2: 
#     return False
#   i = 2
#   while i * i <= x:
#     if x % i == 0:
#       return False
#     i+=1
#   return True

# count = 0
# for x in nums:
#   if is_prime(x):
#     count+=1

# print(count)

MAX = 100000
check= [0]*(MAX +1)
check[0] = check[1] =True

for i in range(2, MAX + 1):
  if not check[i]:
    


m, n = map(int, input().split())

for i in range(m, n+1):
  if check[i] == False:
    print(i)