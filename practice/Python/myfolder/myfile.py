#file handling
f = open("demofile.txt")
print(f.read())

#with stmt
with open("demofile.txt") as f:
    print(f.read())


#close
# f.close()

with open("demofile.txt") as f:
    print(f.read(5))
    print(f.readline())
    print(f.readline())

print("-------- for loop --------")
with open("demofile.txt") as f:
    for x in f:
        print(x)

#write
with open('demo.txt','a') as f:
    f.write("Now the file has more content")

with open('demo.txt') as f:
    print(f.read())

with open('demo.txt','w') as f:
    f.write("oops! we have deleted the extra  content")

with open('demo.txt') as f:
    print(f.read())

#delete
# import os
# os.remove("demofile.txt")

