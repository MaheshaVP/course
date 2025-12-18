#inheritance
class Person:
    def __init__(self,fname,lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(f"{self.firstname},{self.lastname}")

# x = Person("shreya","goshal")
# x.printname()

class Student(Person):
    pass

x = Student("Mahesh","Kumar")
x.printname()


#super keyword()
class Person:
    def __init__(self,fname,lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(f"{self.firstname},{self.lastname}")

class Student(Person):
    def __init__(self,fname,lname):
        super().__init__(fname,lname)
        self.gradyear = 2020

x = Student("Mike", "Olsen")
x.printname()
print(x.gradyear)

#Add methods
class Person:
    def __init__(self,fname,lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(f"{self.firstname},{self.lastname}")

class Student(Person):
    def __init__(self,fname,lname,year):
        super().__init__(fname,lname)
        self.graduationyear = year

    def welcome(self):
        print(f"Welcome, {self.firstname} {self.lastname} ,to the class of {self.graduationyear} ")

x = Student("Manish","Malhotra",2021)
x.welcome()



