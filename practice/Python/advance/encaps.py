class Person:
    def __init__(self,name,age):
        self.name = name
        self.__age = age

    def get_age(self):
        return self.__age
    
    def set_age(self,age):
        if age>0:
            self.__age = age
        else:
            print("Age must be positive number")

p1 = Person("Insta",25)
print(p1.get_age())

p1.set_age(28)
print(p1.get_age())

#real-time example
class Bank:
    def __init__(self,balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance
    
    def deposit(self,amount):
        self.__balance += amount

b = Bank(2000)
print(b.get_balance())
b.deposit(300)
print(b.get_balance())

#inner class
class Car:
    class Engine:
        def start(self):
            return "Engine started"
        
car_engine = Car.Engine()
print(car_engine.start())

#method overriding
class Animal:
    def sound(self):
        print("Animal makes sound")
    
class Dog(Animal):
    def sound(self):
        print("Dog Barks")

d = Dog()
d.sound()