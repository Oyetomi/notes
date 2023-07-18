def palindrome(word):
    from collections import deque
    dq = deque(word)
    while len(dq) > 1:
        if dq.popleft() != dq.pop():
            return False
    return True


print(palindrome('radar'))


def another_palindrome(word):
    return word == word[::-1]


print(another_palindrome("radar"))

import itertools

for item in itertools.chain([1, 2], ["a", "b"]):
    print(item)
