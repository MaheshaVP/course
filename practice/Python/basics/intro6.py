#If statements
a = 33
b = 200

if b>a:
    print("b is greater")


#elif statements
a = 33
b = 33

if b>a:
    print("b is greater")
elif a == b:
    print("a equals to c")

score = 920
if score >= 90:
    print("A")
elif score >= 80:
    print("B+")
elif score <= 70:
    print("Fail")

#else
num = 5
if num % 2 == 0:
    print("Even")
else:
    print("odd")

#shorthand
a = 5
b = 2
if a>b : print("a is greater")


a = 2
b = 80
print('A') if a>b else print("=") if a==b else print('B')

#logical operator
a = 200
b = 33
c = 500
#and
if a>b and c>a:
    print("Both are true")

#or
if a>b or a>c:
    print("Atleast one is true")

#not
if not b>a:
    print("b is not greater")

#ex
score = 85
if score>0 and score<100:
    print("Valid score")
else:
    print("Invalid score")

#nestedn if
x = 42
if x>10:
    print("above 10")
    if x>20:
        print("also above 20")
    else:
        print("but below 20")

score = 95
attendence = 90
submitted = True

if score >= 60:
    if attendence >= 80:
        if submitted:
            print("Pass with good attendence")
        else:
            print("assesment is missing")
    else:
        print("pass but low attendance")
else:
    print('fail')

#Match
day=4
match day:
    case 1:
        print('Mon')
    case 2:
        print("Tue")
    case _:                         #default
        print("Other days")


day = 5
match day:
    case 1|2|3|4|5:
        print('week days')
    case 6|7:
        print('weekend')

    