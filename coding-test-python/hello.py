a = 3
b = 4

print(a ** b) # 3 ^ 4
print(a / b) # 나눗셈 (몫)
print(a // b) # 나눗셈 내림

print(a % b) # 나눗셈(나머지)

# 문자열
str1 = "Hello Word"
str2 = 'Hello\'s Word'
str3 = "Hello Word"

str4 = str1 + str2
print(type(str1))

number = 10
day = "three"

str5 = "I ate %d apples. so I was sick for %s days." % (number, day)
print(str5)

name = "Yun"
des = f"나의 이름은 {name}입니다."
print(des)