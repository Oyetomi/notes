# empty_dict = {}
# bierce = {
#     "day": "A period of twenty-four hours, mostly misspent",
#     "positive": "Mistaken at the top of one's voice",
#     "misfortune": "The kind of fortune that never misses", }
# print(empty_dict)
# print(bierce)
#
# acme_customer = dict(first="Wile", middle="E", last="Coyote")
# print(acme_customer)

pythons = {
    'Chapman': 'Graham',
    'Cleese': 'John',
    'Idle': 'Eric',
    'Jones': 'Terry',
    'Palin': 'Michael',
}
others = {'Marx': 'Groucho', 'Howard': 'Moe'}
# pythons["Gilliam"] = "Gerry"
# print(pythons)
# print(pythons["Jones"])
# print("Idle" in pythons)
# print(pythons.get("Groucho", "not in dictionary"))
# signals = {'green': 'go', 'yellow': 'go faster', 'red': 'smile for the camera'}
# print(list(signals.keys()))
#
# first = {'a': 'agony', 'b': 'bliss'}
# second = {'b': 'bagels', 'c': 'candy'}
# newdict = {**first, **second}
# newdict_copy = copy.deepcopy(newdict)
# print(newdict_copy)

# pythons.update(others)
# print(pythons)

# word = 'letters'
# letter_counts = {letter: word.count(letter) for letter in set(word)}
# print(letter_counts)

vowels = 'aeiou'
word = 'onomatopoeia'
vowel_counts = {letter: word.count(word) for letter in set(word) if letter in vowels}
print(vowel_counts)
