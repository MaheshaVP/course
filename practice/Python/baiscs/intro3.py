#walrus operator
b = 20
if (a:=25) > b:
    print(f"{a} is greater")

#membership operator
x = "Hello"
print("l" in x)
print("n" not in x)


print("Identity operator")
x = 5
y = 5
print(x == y)
print(x is y)
print(x is not y)

#list

thislist = [1,2,3,4,5]
print(len(thislist))
i = 0
while i < len(thislist):
    print(thislist[i])
    i = i + 1

thislist = [1,2,3,4,5,6]
for i in thislist:
    print(i)

print('List items using comprahension')
thislist = [1,2,3,4,5,6,7,8,9,10]
new = []

for x in thislist:
    if x%2 == 0:
        new.append(x)

print(new)

#sort 
list = [2,4,1,3,6,11]
list.sort()
print(list)

list.sort(reverse=True)
print(list)

list = ['a','c','B','D']
list.sort(key=str.lower)
print(list)

list.reverse()
print(list)

#copy
l1 = [8,1,2,5,3,4]
mylist = l1.copy()
print(mylist)

thislist = ['a','b','c']
myli = thislist[:]
print(myli)

#joins
l1 = ['a','b','c']
l2 = [1,2,3]
l3 = l1 + l2
print(l3)

for x in l2:
    l1.append(x)
print(l1)

l1.extend(l2)
print(l1)

