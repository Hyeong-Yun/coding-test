n, m = map(int, input().split())

count = 0

def do(n):
  global count
  if n == 1:
    return count

  count+=1
  
  if n % m == 0:
    return do((n // m))
  else:
    return do(n - 1)

print(do(n))