#class
class Myclass:
    x = 5
p1 = Myclass()      #object
print(p1.x)

#__init__()
class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

p1 = Person("Mahesh",32)
print(p1.name)
print(f"{p1.name} is {p1.age} years old.")

#default
class Person:
    def __init__(self,name,age=25):
        self.name = name
        self.age = age

p1 = Person("Mahesh",32)
p2 = Person("krishna")

print(p1.name,p1.age)
print(p2.name,p2.age)

#multiple params
class Person:
    def __init__(self,name,age,city,country):
        self.name = name
        self.age = age
        self.city = city
        self.country = country

p1 = Person("Manoj",21,"Bangalore","India")
print(f"{p1.name},{p1.age},{p1.city},{p1.country}")

#self parameter
class Person:
    def __init__(self,name,age=21):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello , My name is ",self.name)

p1 = Person("Kohli",22)
p2 = Person("jeethu")
p1.greet()
p2.greet()

#calling method
class Person:
    def __init__(self,name):
        self.name = name

    def greet(self):
        return "Hello "+self.name
    
    def welcome(self):
        message = self.greet()
        print(message,"Welcome to our website")

p1 = Person("Chaithra")
p1.welcome()

