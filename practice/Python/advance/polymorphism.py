#polymorphism
class Car:
    def __init__(self,brand,model):
        self.brand = brand
        self.model = model

    def move(self):
        print("Move!")

class Boat:
    def __init__(self,brand,model):
        self.brand = brand
        self.model = model

    def move(self):
        print("Sail!")

class Plane:
    def __init__(self,brand,model):
        self.brand = brand
        self.model = model

    def move(self):
        print("Fly!")

car1 = Car("Ford","mustag")
boat1 = Boat("Ibize","Turing")
plane1 = Plane("Boeing","747")

for x in (car1,boat1,plane1):
    x.move()


#inheritance with polymorphism
class Vehicle:
    def __init__(self,brand,model):
        self.brand = brand
        self.model = model

    def move(self):
        print("Move")

class Car(Vehicle):
    pass

class Boat(Vehicle):
    def move(self):
        print("Sail")

class Plane(Vehicle):
    def move(self):
        print("Fly")     

car1 = Car("Ford","mustag")
boat1 = Boat("Ibize","Turing")
plane1 = Plane("Boeing","747")

for x in (car1,boat1,plane1):
    print(x.brand)
    print(x.model)
    x.move()
    