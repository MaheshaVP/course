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



