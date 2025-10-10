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

