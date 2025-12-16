#function
def func():
    print('this is function')
func()

def tocelsius(fh):
    return (fh - 32)* 5/9
print(tocelsius(85))
print(tocelsius(46))

#arguments
def func(name,age=18):      #parameters
    print(name,'is',age,'years old')

func("mahesh",21)

func(name="jeethu",age=20)
func('chethu')              #arguments


def func(fname,lname):
    print(fname,'',lname)
func("Rockey","bhai")


#list in functions
def my_func(fruits):        #parms
    for x in fruits:
        print(x)
    print('Done!')

fruits_list = ['a','b','c']
print(my_func(fruits_list))     #args


#return values
def add(x,y):
    return x+y
result = add(5,6)
print(result)


# *args *kwargs
def func(*kids):
    print('The last children is', kids[-1])
    print(kids)
    print(type(kids))       #tuples

func('a','b','c','d')


def welcome(greeting, *names):
    for x in names:
        print(greeting,x)

welcome('Hello','mahesh','chethu','prasanna')


#sum using *ags
def sum(*nums):
    total = 0
    for num in nums:
        total += num
    return total
    
print(sum(1,2,3,4,5))

#max
def max(*nums):
    if len(nums) <= 0:
        return None
    maxnum = nums[0]
    for num in nums:
        if num > maxnum:
            maxnum = num
    return maxnum

print(max(2,5,3,8,9,6))


# *kwargs
def myfunc(**kids):
    print('His last name is ',kids['lname'])
myfunc(fname='virat',lname='kohli')

#scope
def myfunc():
    x = 300
    print(x)
myfunc()

#global scope
x = 400
def myfunc():
    print(x)

myfunc()

#global keyword
x = 150
def func():
    global x
    x = 100
    print(x)
func()
print(x)


#Decorators
def changecase(func):
    def inner():
        return func().upper()
    return inner

@changecase
def myfunc():
    return "Hello sayed"
print(myfunc())


#lambda function
x = lambda a,b : a+b
print(x(6,8))

def myfunc(n):
    return lambda a : a*n

double = myfunc(2)
print(double(12))


#recursion
def countdown(n):
    if n<= 0:
        print("Done")
    else:
        print(n)
        countdown(n-1)
countdown(6)


#factorial
def fact(n):
    if n==0 or n==1:
        return 1
    else:
        return n*fact(n-1)
print(fact(5))


#fibonacci
def fib(n):
    if n<=1:
        return n
    else:
        return fib(n-1) + fib(n-2)
print(fib(8))