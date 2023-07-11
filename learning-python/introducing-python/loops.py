# count = 1
# while count <= 5:
#     print(count)
#     count += 1

# while True:
#     stuff = input("String to capitalize [type q to quit]:")
#     if stuff == "q":
#         break
#     print(stuff.capitalize())

# while True:
#     value = input("Integer, please [q to quit]:")
#     if value == "q":
#         break
#     number = int(value)
#     if number % 2 == 0:
#         continue
#     print(number, "squared id", number ** 2)

# numbers = [1, 3, 5]
# position = 0
# while position < len(numbers):
#     number = numbers[position]
#     if number % 2 == 0:
#         print("Found even number", number)
#         break
#     position += 1
# else:
#     print("no even number found")

word = "thud"
for letter in word:
    print(letter)

word = "thud"
for letter in word:
    if letter == "x":
        print("Eek! An 'x'!")
        break
    print(letter)
else:
    print("No 'x'!")

for x in range(0, 3):
    print(x)

print(list(range(0, 4)))

print(list(range(0, 11, 2)))
