#sets
myset = {'a','b','c','b','d'}
print(myset)

myset = {'a','b','c','d'}
for x in myset:
    print(x)

print('b' in myset)

myset.add('e')
print(myset)

set1 = {'a','b'}
set2 = {'x','y'}
set1.update(set2)
print(set1)

set1 = {'a','b'}
mylist = ['m','n']
set1.update(mylist)
print(set1)

myset = {'a','b','c','d'}
myset.remove('c')
print(myset)

myset.discard('b')
print(myset)


myset.clear()
print(myset)

set1 = {'a','b','c'}
set2 = {1,2,3}
set3 = set1.union(set2)
print(set3)

x = frozenset({'a','e'})
print(x)
print(type(x))


#dictionaries
thisdict = {
    "brand" : "mustag",
    "model" : "ford",
    "year" : 1986 ,
    "color" : ["red","cream"]
}
print(thisdict)

print(len(thisdict))
print(type(thisdict))

#Access
print(thisdict["model"])
print(thisdict.get("color")[0])

print(thisdict.keys())
print(thisdict.values())

thisdict["color"] = "Pink"
print(thisdict)

if "color" in thisdict:
    print("Yes , present")

thisdict["rank"] = "second"
print(thisdict)

thisdict.update({"rounds":22})
print(thisdict)

#remove
print(thisdict.pop("rounds"))
print(thisdict)

# print(thisdict.clear())

#loop
for x,y in thisdict.items():
    print(x,y)

#nested
myfamily = {
    "child1" : {
        "name" : "john",
        "year" : 2003
    },
    "child2" : {
        "name" : "kemo",
        "year" : 2004
    }
}

print(myfamily["child1"]["name"])
