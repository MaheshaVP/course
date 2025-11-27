#walrus operator
b = 20
if (a:=25) > b:
    print(f"{a} is greater")

#membership operator
x = "Hello"
print("l" in x)
print("n" not in x)


print("Identity operator")
x = 5
y = 5
print(x == y)
print(x is y)
print(x is not y)