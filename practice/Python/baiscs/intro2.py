# Data types
int
float
complex
list
tuple
dict
set
bool
str

#examples
print(type("Hello Jeethu"))

letters = ['a','b','c','d']
print(type(letters))

#random numbers
import random
print(random.randrange(1,20))

#casting
print(int(3.10))

#strings
a = "Hello"
print(a)

a = """
This is the
multiline 
comment
"""
print(a)

#string array
a = "Love you"

print(a[2]),print("\n")
print(len(a)),print("\n")
for x in a:
    print(x)
txt = "I Love you"
if "I" in txt:
    print("yes present")
print("In" in txt)
print("\n")

#string slicing
b = "Hello world"
print(b[2:5])
print(b[:6])
print(b[4:])
print(b[-5:-2])
print("\n")

#string modify
a = "Love You"
print(a.upper())
print(a.lower())
print(a.capitalize())
print(a.strip())
print(a.split(","))
print(a.replace("L","H"))
print("\n")

#sting concatenation
a = "Hello"
b = "World"
c = a+ " " +b
print(c)

#F strings
age = 32
txt = f"I am {age} years old"
print(txt)
print("\n")

#Boolean
print(10 > 9)
print(10 == 9)
if 200>90:
    print("Yes")
else:
    print("No")





