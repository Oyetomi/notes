# empty_set = set()
# print(empty_set)
#
# print(set("letters"))
#
# print(set(['Dasher', 'Dancer', 'Prancer', 'Mason-Dixon']))
# print(set({'apple': 'red', 'orange': 'orange', 'cherry': 'red'}))
#
# s = set((1, 2, 3))
# s.add(4)
# print(s)
# print(s.remove(2))
# print(s)

# drinks = {
#     'martini': {'vodka', 'vermouth'},
#     'black russian': {'vodka', 'kahlua'},
#     'white russian': {'cream', 'kahlua', 'vodka'},
#     'manhattan': {'rye', 'vermouth', 'bitters'},
#     'screwdriver': {'orange juice', 'vodka'}}
#
# for name, contents in drinks.items():
#     if "vodka" in contents and not contents & {"vermouth", "cream"}:
#         print(name)
#
# for name, contents in drinks.items():
#     if contents & {"vermouth", "orange juice"}:
#         print(name)
#
# bruss = drinks['black russian']
# wruss = drinks['white russian']
#
# a = {1, 2}
# b = {2, 3}
# print(a.intersection(b))
# print(a.union(b))
# print(bruss & wruss)
# print(a ^ b)

# a_set = {number for number in range(1, 6) if number % 3 == 1}
# print(a_set)

# fs = frozenset([3, 2, 1])
# # error
# print(fs.add(1))
