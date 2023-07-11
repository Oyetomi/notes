disaster = True
if disaster:
    print("woe")
else:
    print("whee!")

color = "mauve"
if color == "red":
    print("its a tomato")
elif color == "green":
    print("its a green pepper")
elif color == "bee purple":
    print("I don't know what it is, but only bees can see it")
else:
    print("I've never heard of the color", color)

x = 7
print(5 < x < 10)

some_list = []
if some_list:
    print("Theres something in here")
else:
    print("list is empty")

vowels = "aeiou"
letter = "o"
print(letter in vowels)
if letter in vowels:
    print(letter, "is a vowel")

letter = "o"
vowel_set = {"a", "e", "i", "o", "u"}
print(letter in vowel_set)
vowel_dict = {'a': 'apple', 'e': 'elephant', 'i': 'impala', 'o': 'ocelot', 'u': 'unicorn'}
print(letter in vowel_dict.keys())
print(letter in vowel_dict.values())

tweet_limit = 280
tweet_string = "Blah" * 50
if diff := tweet_limit - len(tweet_string) >= 0:
    print(f"A fitting tweet with {len(tweet_string)} characters")
else:
    print("went over by", abs(diff))
