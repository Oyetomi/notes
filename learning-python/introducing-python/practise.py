# def unicode_test(value):
#     import unicodedata
#     name = unicodedata.name(value)
#     value2 = unicodedata.lookup(name)
#     print(f'value="{value}", name="{name}", value2="{value2}"')
#
#
# unicode_test('A')
# unicode_test('$')
# unicode_test('\u00a2')
# unicode_test('\u2603')
# place = 'caf\N{LATIN SMALL LETTER E WITH ACUTE}'
# print(place)
#
# snowman = '\u2603'
# print(len(snowman))
# ds = snowman.encode("utf-8")
# print(len(ds))
# print(ds)

# import re
#
# source = 'Young Frankenstein'
# if m := re.match("You", source):
#     print(m.group())
#
# # result = re.match("You", "Young Frankenstein")
# # print(result)
#
# import string
#
# printable = string.printable
# print(len(printable))
#
# print(printable[:50])
# print(printable[50:])
#
# re.findall("\d", printable)
# print(re.findall('\w', printable))
#
# source = '''I wish I may, I wish I might Have a dish of fish tonight.'''
#
# print(re.findall("^wish", source))
# print(re.findall("fish^", source))
# print(re.findall("[wf]ish", source))
# print(re.findall(r"\bfish", source))
#
# blist = [1, 2, 3, 255]
# the_bytes = bytearray(blist)
# the_bytes[1] = 127
# print(the_bytes)
#
# import calendar
#
# print(calendar.isleap(1900))
#
# from datetime import date
#
# halloween = date(2019, 10, 31)
# print(halloween.isoformat())
#
# from datetime import date
#
# now = date.today()
# print(now)
#
# from datetime import timedelta
#
# one_day = timedelta(days=1)
# tomorrow = now + one_day
# print(tomorrow)
#
# from datetime import datetime
#
# now = datetime.now()
# print(now)
#
# import time
#
# now = time.time()
# print(now)
# print(time.ctime(now))
#
# print(time.localtime(now))
# print(time.localtime(now))
#
# import time
#
# now = time.localtime()
# print(now[0])
#
# import time
#
# now = time.time()
# print(time.ctime(now))
# print(time.localtime(now))
#
# fmt = "It's %A, %B %d, %Y, local time %I:%M:%S%p"
# t = time.localtime()
# print(time.strftime(fmt, t))

with open("oops.txt", "wt") as fout:
    print("Oops I created a file.", file=fout)

poem = '''There was a young lady named Bright,
Whose speed was far faster than light;
She started one day
In a relative way,
And returned on the previous night...'''
#
# fout = open("relativity", "wt")
# print(poem, file=fout, sep=" ", end=" ")
# # fout.write(poem)
# fout.close()
#
# try:
#     fout = open("relativity", "xt")
#     fout.write("stomp stomp stomp")
# except FileExistsError:
#     print('relativity already exists!. That was a close one.')
#
# with open("relativity", "rt") as fin:
#     peom = fin.read()
#     print(peom)

# peom = " "
# fin = open("relativity", "rt")
# while True:
#     line = fin.readline()
#     if not line:
#         break
#     peom += line
# print(peom)
# fin.close()


# with open("relativity", "rt") as fin:
#     lines = fin.readlines()
# print(len(lines), "lines read")
#
# for line in lines:
#     print(line, end="\n")

import os

# import shutil
#
# print(os.path.exists("oops.txt"))
# print(os.path.isfile("oops.txt"))
# shutil.copy("oops.txt", "ohno.txt")
#
# import glob
#
# print(glob.glob("a*"))
# print(os.path.abspath("oops.txt"))
#
# from pathlib import Path
#
# file_path = Path("eek") / "urk" / "snort.txt"
# print(file_path.name)
print(os.getpid())
print(os.getcwd())
