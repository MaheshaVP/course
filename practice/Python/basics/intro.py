#first code
print("Hello world")
print("I am ",35,"years old")

#indentation
if (5>2):
    print("5 is greater")

#this is a comment

"""
This is a multiline comment
used in pyhon
"""

#variables
#declaration
x = 5
y = "John"
print(x)
print(y)

#casting
x = str(3)
y = float(4)
print(x)
print(y)

# same ==> x = "john" or x = 'john'

#get type
x = 5
y = "John"
print(type(x))
print(type(y))

#  case sensitive (different) ==> a=5 or A=5


#Assign multiple values
x , y, z = "Apple","banana","cherry"
print(x)
print(y)
print(z)

x = y = z = "Orange"
print(x,y,z)

#unpack (destructuring)
fruits = ["kiwi","papaya","mosambi"]
x,y,z = fruits
print(x+ "\n"+ y+ "\n"+ z+ "\n")

#output
x = "Python is awesome"
print(x)

x = "python"
y = "is"
z = "fentastic"
print(x,y,z)

#variables math operations
x = 5
y = 6
print(x+y)

x = 5
y = "john"
print(x,y)
print("\n")

#global variables
print("**********Global variables**********")
x = "beautiful"
def myfunc():
    print("Python is ",x)

myfunc()

x = "beautiful"
def myfunc():
    x = "awesome"
    print("Python is ",x)

myfunc()
print(x)

#global keyword
x = "beautiful"
def myfunc():
    global x
    x = "mind blowing"
    
myfunc()
print("Python is ",x)

import sys
print(sys.version)