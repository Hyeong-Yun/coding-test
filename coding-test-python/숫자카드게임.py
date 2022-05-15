n,m = map(int, input().split())

cmp = 0

for i in range(0, n):
  data = list(map(int, input().split()))
  result = min(data)

  if result >= cmp:
    cmp = result
  

print(cmp)
