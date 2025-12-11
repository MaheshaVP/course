#while loop
i = 1 
while i < 6:
    print(i)
    i += 1
else:
    print("Now i is not less than 6")

#break
i = 1
while i<6:
    print(i)
    if i == 3:
        break
    i += 1

#continue
i = 0
while i<6:
    i+=1
    if i == 4:
        continue
    print(i)

#for loop
fruits = ['apple','banana','cherry']
for x in fruits:
    print(x)

for x in 'banana':
    print(x)

for x in range(6):
    print(x)

for x in range(6):
    if x == 4: break
    print(x)
else:
    print('finally finished')

fruits = ['a','b','c']
for x in fruits:
    print(x)
    if x == 'b': break
else:
    print('complete')


adj = ['a','b','c']
nums = [1,2,3]
for x in adj:
    for y in nums:
        print(x,y)
    
