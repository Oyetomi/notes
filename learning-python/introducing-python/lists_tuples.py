# empty_tuple = ()
# print(empty_tuple)
#
# one_marx = ("Groucho",)
# print(type(one_marx))
#
# marx_tuple = 'Groucho', 'Chico', 'Harpo'
# a, b, c = marx_tuple
# print(a, b, c)
# print(type(marx_tuple))
#
# password = 'swordfish'
# icecream = 'tuttifrutti'
# password, icecream = icecream, password
# print(password, icecream)
#
# marx_list = ['Groucho', 'Chico', 'Harpo']
# print(tuple(marx_list))
#
# another_empty_list = []
# print(another_empty_list)
#
# print(list("cat"))
#
# a_tuple = ('ready', 'fire', 'aim')
# print(list(a_tuple))
#
# talk_like_a_pirate_day = '9/19/2019'
# print(talk_like_a_pirate_day.split("/"))
#
# marxes = ['Groucho', 'Chico', 'Harpo']
# print(marxes[:2])

# marxes = ['Groucho', 'Chico', 'Harpo']
# others = ["Gunmo", "Kral"]
# marxes.reverse()
# marxes.extend(others)
# marxes.append("zeppo")
# marxes.insert(2, "Gunmo")
# print(marxes)


# marxes = ['Groucho', 'Chico', 'Harpo', 'Gummo', 'Karl']
# print(marxes[-1])
# del marxes[-1]
# marxes.remove('Groucho')
# marxes.pop()
# print(marxes)

# work_quotes = ['Working hard?', 'Quick question!', 'Number one priorities!']
# work_quotes.clear()
# print(work_quotes)

# marxes = ['Groucho', 'Chico', 'Harpo', 'Zeppo']
# if "Groucho" in marxes:
#     marxes.remove("Groucho")
#     print("removed the element")
# else:
#     print("no element found")
# print(marxes)

# marxes = ['Groucho', 'Chico', 'Harpo', 'Zeppo']
# ", ".join(marxes)
# print(marxes)
# sorted_marxes = sorted(marxes)
# print(sorted_marxes)
# marxes.sort()
# print(marxes)

# numbers = [2, 1, 4.0, 3]
# numbers.sort(reverse=True)
# print(numbers)
#
# a = [1, 2, 3]
# b = a.copy()
# c = list(a)
# d = a[:]
# print(a)
# print(b)
# print(c)

# days = ['Monday', 'Tuesday', 'Wednesday']
# fruits = ['banana', 'orange', 'peach']
# drinks = ['coffee', 'tea', 'beer']
# desserts = ['tiramisu', 'ice cream', 'pie', 'pudding']
# for day, fruit, drink, dessert in zip(days, fruits, drinks, desserts):
#     print(day, ": drink", drink, "- eat", fruit, "- enjoy", dessert)

# english = 'Monday', 'Tuesday', 'Wednesday'
# french = 'Lundi', 'Mardi', 'Mercredi'
#
# print(dict(zip(english, french)))

# [expression for item in iterable]

# number_list = [number for number in range(1, 6)]
# print(number_list)

# a_list = [number for number in range(1, 6) if number % 2 == 1]
# print(a_list)

# rows = range(1, 4)
# cols = range(1, 3)
# for row in rows:
#     for col in cols:
#         print(row, col)
#
# cells = [(row, col) for row in rows for col in cols]
# for cell in cells:
#     print(cell)

# small_birds = ['hummingbird', 'finch']
# extinct_birds = ['dodo', 'passenger pigeon', 'Norwegian Blue']
# carol_birds = [3, 'French hens', 2, 'turtledoves']
# all_birds = [small_birds, extinct_birds, 'macaw', carol_birds]
