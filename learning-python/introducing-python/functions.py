# def make_a_sound():
#     print("quack")
#
#
# make_a_sound()
#
#
# def agree():
#     return True
#
#
# if agree():
#     print("Splendid")
# else:
#     print("That was unexpected")
#
#
# def echo(anything):
#     return f"{anything} {anything}"
#
#
# print(echo("Rumplestiltskin"))
#
# thing = None
# if thing:
#     print("It's some thing")
# else:
#     print("Its no thing")
#
# thing = None
# if thing is None:
#     print("its nothing")
# else:
#     print("its something")
#
#
# def whatis(thing):
#     if thing is None:
#         print(thing, "is None")
#     elif thing:
#         print(thing, "is True")
#     else:
#         print(thing, "is false")
#
#
# whatis(None)
#
#
# def menu(wine, entree, dessert="pudding"):
#     return {'wine': wine, 'entree': entree, 'dessert': dessert}
#
#
# print(menu('chardonnay', 'chicken', 'cake'))
# print(menu(entree="beef", wine="bordeaux"))

# def buggy(arg, result=[]):
#     result.append(arg)
#     print(result)
#
#
# buggy("a")
# buggy("b")


# def nonbuggy(arg, result=None):
#     if result is None:
#         result = []
#     result.append(arg)
#     print(result)
#
#
# nonbuggy("a")
# nonbuggy("b")

# def print_args(*args):
#     print("Positional tuple:", args)
#
#
# print_args(3, 2, 1, 'wait!', 'uh...')
#
#
# def print_more(required1, required2, *args):
#     print('Need this one:', required1)
#     print('Need this one too:', required2)
#     print('All the rest:', args)
#
#
# print_more('cap', 'gloves', 'scarf', 'monocle', 'mustache wax')
#
#
# def print_kwargs(**kwargs):
#     print("keyword arguements:", kwargs)
#
#
# print_kwargs()
# print_kwargs(wine='merlot', entree='mutton', dessert='macaroon')

# def print_data(data, *, start=0, end=100):
#     for value in (data[start:end]):
#         print(value)


# data = ['a', 'b', 'c', 'd', 'e', 'f']
# print_data(data)
# print_data(data, start=4)

# outside = ['one', 'fine', 'day']
#
#
# def mangle(arg):
#     arg[1] = "terrible"
#
#
# print(outside)
# mangle(outside)
# print(outside)

# def echo(anything):
#     "echo returns its input argument"
#     return anything
#
#
# print(echo.__doc__)
#
# def answer():
#     print(42)
#
#
# def run_something(func):
#     func()
#
#
# run_something(answer)
#
#
# def add_args(arg1, arg2):
#     print(arg1 + arg2)
#
#
# def run_something_with_args(func, arg1, arg2):
#     func(arg1, arg2)
#
#
# run_something_with_args(add_args, 5, 9)
#
#
# def sum_args(*args):
#     return sum(args)
#
#
# def run_with_positional_args(func, *args):
#     return func(*args)
#
#
# print(run_with_positional_args(sum_args, 1, 2, 3, 4))


# def outer(a, b):
#     def inner(c, d):
#         return c + d
#
#     return inner(a, b)
#
#
# print(outer(4, 7))


# def knights(saying):
#     def inner(quote):
#         return f"we are the knights who say: {quote}"
#
#     return inner(saying
#
#
# print(knights("Ni"))

# def knights2(saying):
#     def inner2():
#         return "We are the knighs who say: '%s' % saying"
#
#     return inner2
#
#
# a = knights2("Duck")
# b = knights2("Hasenpfeffer")


# def edit_story(words, func):
#     for word in words:
#         print(func(word))
#
#
# stairs = ['thud', 'meow', 'thud', 'hiss']
#
#
# def enliven(word):
#     return f"{word.capitalize()}!"
#
#
# # edit_story(stairs, enliven)
#
# edit_story(stairs, lambda word: f"{word.capitalize()}!")

# def my_range(first=0, last=10, step=1):
#     number = first
#     while number < last:
#         yield number
#         number += step
#
#
# ranger = my_range(1, 5)
# for x in ranger:
#     print(x)
#
# genobj = iter(zip(["a", "b"], ["1", "2"]))
# print(genobj)
# for thing in genobj:
#     print(thing)

# def document_it(func):
#     def new_function(*args, **kwargs):
#         print('Running function:', func.__name__)
#         print('Positional arguments:', args)
#         print('Keyword arguments:', kwargs)
#         result = func(*args, **kwargs)
#         print('Result:', result)
#         return result
#
#     return new_function
#
#
# def square_it(func):
#     def new_function(*args, **kwargs):
#         result = func(*args, **kwargs)
#         return result * result
#
#     return new_function
#
#
# @document_it
# @square_it
# def add_ints(a, b):
#     return a + b


# add_ints(3, 5)

# print(add_ints(3, 5))
# cooler_add_ints = document_it(add_ints)
# cooler_add_ints(3, 5)

animal = "fruitbat"


# def print_global():
#     print('inside print_global:', animal)
#
#
# print_global()

# animal = "fruitbat"
#
#
# def change_local():
#     animal = "wombat"
#     print("locals:", locals())
#
#
# print(animal)
# change_local()

# animal = "fruitbat"
#
#
# def change_and_print_global():
#     global animal
#     animal = "wombat"
#     print('inside change_and_print_global:', animal)
#
#
# print(animal)
# change_and_print_global()


# def amazing():
#     """
#     This is the amazing function.
#     want to see it again???
#     """
#     print('This function is named:', amazing.__name__)
#     print('And its docstring is:', amazing.__doc__)
#
#
# amazing()

# def flatten(lol):
#     for item in lol:
#         if isinstance(item, list):
#             yield from flatten(item)
#         else:
#             yield item
#
#
# lol = [1, 2, [3, 4, 5], [6, [7, 8, 9], []]]
# print(flatten(lol))
# print(list(flatten(lol)))

# short_list = [1, 2, 3]
# position = 5
# try:
#     short_list[position]
# except:
#     print("Need a position between 0 and", len(short_list) - 1, ' but got', position)

# short_list = [1, 2, 3]
# while True:
#     value = input("Position [q to quit]?")
#     if value == 'q':
#         break
#     try:
#         position = int(value)
#         print(short_list[position])
#     except IndexError as err:
#         print("Bad index: ", position)
#     except Exception as other:
#         print("Something else broke: ", other)

class UppercaseException(Exception): pass


words = ['eenie', 'meenie', 'miny', 'MO']
for word in words:
    if word.isupper():
        raise UppercaseException(word)
