n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort(reverse=True)

num1 = data[0]
num2 = data[1]
answer = 0

sub = int(m/k)
answer = num1*k*sub + num2*(m - sub*k)

print(answer)
