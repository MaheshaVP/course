#defining a function

#define
def hello():
    print("Hello world")

hello()

#with parameters
def hello(name):
    print(f"Hello {name}")

hello("Mahesh")

#f string
capital = "New Delhi"
country = "India"
print(f"{capital} is the capital city of {country}")


#add 
def add_num(x,y):
    return x+y

sum = add_num(4,8)
print(sum)

#default params
def hello(name = "Guest"):
    print(f"Hi {name}")
hello("Vega")

#keyword args
def hello(x=20,y=30):
    return x-y  
print(hello())

# scope and global variables
x = 20
def test():
    print(x)
test()

x = 100

def test1(y):
    global x
    z = x+y
    print("inside the func",z)

test1(20)
print("outside the function",x)

#scope
n = 23

def test2(n):
    n = 21      #scope
    print(n)

test2(18)


#nested function
def person(name):
    print(f"Hello, {name}")

def favcity(city,name):
    person(name)
    print(f"welcome to {city}")

favcity("Kerala","Mahi")