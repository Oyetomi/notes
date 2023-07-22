import csv

# villains = [
#     ["Doctor", "No"],
#     ["Rosa", "Klebb"]
# ]
#
# with open('villains', 'wt') as fout:  # a context manager
#     csvout = csv.writer(fout)
#     csvout.writerows(villains)

# with open("villains", "rt") as fin:
#     cin = csv.reader(fin)
#     villains = [row for row in cin]
# print(villains)


import csv

villains = [
    {'first': 'Doctor', 'last': 'No'},
    {'first': 'Rosa', 'last': 'Klebb'},
    {'first': 'Mister', 'last': 'Big'},
    {'first': 'Auric', 'last': 'Goldfinger'},
    {'first': 'Ernst', 'last': 'Blofeld'},
]
with open('villains.txt', 'wt') as fout:
    cout = csv.DictWriter(fout, ['first', 'last'])
    cout.writeheader()
    cout.writerows(villains)
