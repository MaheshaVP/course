#list
items = ["apple", "banana", "cherry", "date"]
print(items)

#accessing elements
print(items[1])

print(items[-1])

#slicing
print(items[0:2])
print(items[2:3])
print(items[2:])

#modify
items[0] = "Ananus"
print(items)

#adding
items.append("pineapple")
print(items)

items.insert(2,"carrot")
print(items)


#remove
items.remove("cherry")
print(items)

items.pop()
print(items)

#checking
print("Apple" in items)

#length
print(len(items))

#list comprahensions
scores = [60,80,95,91]

for i in scores:
    print(i/2)

[i/2 for i in scores]

