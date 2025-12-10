#tuples
tuple1 = ('a','b','c','d')

print(len(tuple1))  #length

tuple2= ("apple",)
print(type(tuple2)) #type

#constructor
thistuple = tuple(('x','y','z'))
print(type(thistuple))
print(thistuple)

#access
tuple1 = ('a','b','c','d','e','f','g','h')

print(tuple1[1])  #2nd element
print(tuple1[-1]) #lase elem
print(tuple1[2:5])
print(tuple1[:4])
print(tuple1[2:])
print(tuple1[-4:-1])

if 'b' in tuple1:
    print("yes present")

print('b' in tuple1)


#change the tuple ADD/UPDATE
x = (1,2,3,4)
y = list(x)
y[1] = 5
x = tuple(y)
print(x)

y.append(6)
x = tuple(y)
print(x)

y = (8,)
x += y
print(x)

#Remove
x = (1,2,3,4)
y = list(x)
y.remove(3)
x = tuple(y)
print(x)

#unpack and astrick
x = (1,2,3,4,5,6,7,8)
(*a,b,c,d) = x
print(c)

#loop
x = (1,2,3,4,5)
for i in x:
    print(i)

x = (12,13,14,15,16)
for i in range(len(x)):
    print(x[i])

#while loop
x = (1,2,3,4,5)
i = 0
while i < len(x):
    print(x[i])
    i = i+1

#join tuple
t1 = (1,2,3)
t4 = t1 * 2
print(t4)