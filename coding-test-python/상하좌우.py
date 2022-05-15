n = int(input())
arr = input().split()

x, y = 1, 1

for i in range(0, len(arr)):
  print(x, y)
  if arr[i] == 'R':
    x+=1
    if x > n:
      x-=1
  elif arr[i] == 'L':
    x-=1
    if x < 1:
      x+=1
  elif arr[i] == 'U':
    y-=1
    if y < 1:
      y+=1
  elif arr[i] == 'D':
    y+=1
    if x > n:
      y-=1

print(y, x)