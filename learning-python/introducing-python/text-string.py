print(r"\n raw")

print(
    """
    multi-line
    strings
    newline
    """)
print("")
print(str(98.6))

palindrome = 'A man,\nA plan,\nA canal:\nPanama.'
print(palindrome)
print("ab\tc")
print("abc\t.")
testimony = "\"I did nothing!\" he said. \"Or that other thing.\""
print(testimony)
speech = 'The backslash (\\) bends over backwards to please you.'
print(speech)
info = r'Type a \n to get a new line in a normal string'
print(info)

poem = r'''Boys and girls, come out to play.
The moon doth shine as bright as day.'''
print(poem)

start = 'Na ' * 4 + '\n'
middle = 'Hey ' * 3 + '\n'
end = 'Goodbye.'
print(start + start + middle + end)

name = "Henny"
print(name.replace("H", "p"))
print("P" + name[1:])
letters = 'abcdefghijklmnopqrstuvwxyz'
print(letters[4:20:3])
print(letters[-1::-1])
tasks = 'get gloves,get mask,give cat vitamins,call ambulance'
print(tasks.split(','))

crypto_list = ['Yeti', 'Bigfoot', 'Loch Ness Monster']
crypto_string = ', '.join(crypto_list)
print('Found and signing book deals:', crypto_string)

setup = "a duck goes into a bar..."
print(setup.replace("duck", "marmoset"))
print(setup.replace('a ', 'a famous ', 2))
world = " earth "
print(world.strip())
print(world.lstrip())
print(world.rstrip())
blurt = "What the...!!?"
print(blurt.strip('.?!'))

poem = '''All that doth flow we cannot liquid name 
Or else would fire and water be the same;
But that is liquid which is moist and wet
Fire that property can never get.
Then 'tis not cold that doth the fire put out 
 But 'tis the wet that makes it die, no doubt.'''
print(len(poem))
poem.startswith('All')

word = 'the'
print(poem.find(word))
print(poem.index(word))
print(poem.rfind(word))
print(poem.count(word))
print(poem.isalnum())

setup = 'a duck goes into a bar...'
print(setup.center(30))
print(setup.ljust(30))
print(setup.rjust(30))

print("%s" % 42)
print('%d%%' % 100)

actor = 'Richard Gere'
cat = 'Chester'
weight = 28
print("My wife's favorite actor is %s" % actor)
print("Our cat %s weighs %s pounds" % (cat, weight))
thing = 'woodchuck'
print("%+13s" % thing)
print("{}".format(actor))

thing = 'woodchuck'
place = 'lake'
print('The {} is in the {}.'.format(thing, place))
print('The {1} is in the {0}.'.format(place, thing))
print('The {thing} is in the {place}'.format(thing='duck', place='bathtub'))
d = {'thing': 'duck', 'place': 'bathtub'}
print("The {0[thing]} is in the {0[place]}".format(d))
thing = 'wraith'
place = "window"
print('The {:10s} is at the {:10s}'.format(thing, place))
print('The {:!^10s} is at the {:!^10s}'.format(thing, place))
thing = 'wereduck'
place = "werepond"
print(f'The {thing.capitalize()} is in the {place.rjust(20)}')
print(f'{thing =}, {place =}')
