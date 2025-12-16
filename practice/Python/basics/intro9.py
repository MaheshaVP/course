#range
x  = range(10)
print(x)

x  = range(2,10,2)
print(x)
print(6 in x)
for i in x:
    print(i)

for i in range(10):
    print(i)

#Arrays
cars = ['a','b','c']
print(cars)

for x in cars:
    print(x)

cars.append('d')
print(cars)



#iter
mytuple = ('a','b','c')
myit = iter(mytuple)
print(next(myit))
print(next(myit))

#module
import mymodule
mymodule.greeting("Mahesh")

import mymodule as mm
mm.greeting("Akshitha")

age = mm.person1['age']
print(age)

#date and time
import datetime
x = datetime.datetime.now()
print(x)
print(x.year)
print(x.day)
print(x.strftime("%A"))
print(x.strftime("%B"))

#math
x = min(1,4,2,-2)
y = max(12,14,56,31)
print(x,y)

import math
x = pow(2,4)
print(x)

x = abs(-7.43)
print(x)

sqrt = math.sqrt(64)
print(sqrt)

x = math.pi
print(x)

#json
import json
x = '{"name":"john","age":30}'
y = json.loads(x)
print(y["age"])

x = {
    'name':'john',
    'age':25,
    'city':'new york'
}
y = json.dumps(x,indent=4)
print(y)

#regex
import re
txt = "the rain in spain"
x = re.search("^the.*spain$",txt)
print(x)

#try and except
try:
    print("Hello")
except:
    print('something went wrong')
finally:
    print('the try except finished')

#f-string
price = 59
txt = f"the price is {price} dollars"
print(txt)

#none
x = None
print(x)

#input
name = input("Enter your name : ")
print(f"Hello ,",name)

