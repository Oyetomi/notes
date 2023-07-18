# # class Cat:
# #     def __init__(self, name):
# #         self.name = name
#
#
# # a_cat = Cat()
# # another_cat = Cat()
# # a_cat.age = 3
# # a_cat.name = "Mr. fuzzybuttons"
# # a_cat.nemesis = another_cat
# # print(a_cat.age)
# # print(a_cat.name)
# # print(another_cat)
# # print(a_cat.nemesis)
# # print(a_cat.nemesis)
#
# # furball = Cat("Grumpy")
# # print(furball.name)
#
# # class Car():
# #     def exclaim(self):
# #         print("I'm a car!")
# #
# #
# # class Yugo(Car):
# #     def exclaim(self):
# #         print("I'm a Yugo! Much like a Car, but more Yugo-ish.")
# #
# #
# # give_me_a_car = Car()
# # give_me_a_yugo = Yugo()
# # give_me_a_yugo.exclaim()
# #
# # print(issubclass(Yugo, Car))
#
#
# class Person():
#     def __init__(self, name):
#         self.name = name
#
#
# class MDPerson(Person):
#     def __init__(self, name):
#         self.name = f"Doctor {name}"
#
#
# class JDPerson(Person):
#     def __init__(self, name):
#         self.name = f"{name}, Esquire"
#
#
# class EmailPerson(Person):
#     def __init__(self, name, email):
#         super().__init__(name)
#         self.email = email
#
#
# person = Person('Fudd')
# print(person.name)
# doctor = MDPerson('Fudd')
# print(doctor.name)
# lawyer = JDPerson('Fudd')
# print(lawyer.name)
# bob = EmailPerson('Bob Frapples', 'bob@frapples.com')
# print(bob.name)
# print(bob.email)

# class PrettyMixin():
#     def dump(self):
#         import pprint
#         pprint.pprint(vars(self))
#
#
# class Thing(PrettyMixin):
#     pass
#
#
# t = Thing()
# t.name = 'Nyarlathotep'
# t.feature = "ichor"
# t.age = "eldritch"
# t.dump()
#
#
# class Duck:
#     def __init__(self, input_name):
#         self.name = input_name
#
#
# fowl = Duck("Daffy")
# print(fowl.name)

class Duck():
    def __init__(self, input_name):
        self.hidden_name = input_name

    # def get_name(self):
    @property
    def name(self):
        print("inside the getter")
        return self.hidden_name

    # def set_name(self, input_name):
    @name.setter
    def name(self, input_name):
        print("inside the setter")
        self.hidden_name = input_name


# don = Duck("Donald")
# print(don.name)
#
# don.name = "Howard"
# print(don.name)


# class Circle():
#     def __init__(self, radius):
#         self.radius = radius
#
#     @property
#     def diameter(self):
#         return 2 * self.radius
#
#
# c = Circle(5)
# c.radius = 7
# print(c.radius)
# print(c.diameter)


# class Duck():
#     def __init__(self, input_name):
#         self.__name = input_name
#
#     @property
#     def name(self):
#         print("inside the getter")
#         return self.__name
#
#     @name.setter
#     def name(self, input_name):
#         print("inside the setter")
#         self.__name = input_name
#
#
# fowl = Duck("Howard")
# print(fowl.name)
#
# fowl.name = "Donald"


# class Fruit:
#     color = "red"
#
#
# blueberry = Fruit()
# blueberry.color = "blue"
# print(Fruit.color)
# print(blueberry.color)


class A():
    count = 0

    def __init__(self):
        A.count += 1

    def exclaim(self):
        print("I'm an A!")

    @classmethod
    def kids(cls):
        print("A has", cls.count, "little objects")


easy_a = A()
breezy_a = A()
wheezy_a = A()
A.kids()


class CoyoteWeapon():
    @staticmethod
    def commercial():
        print('This CoyoteWeapon has been brought to you by Acme')


CoyoteWeapon.commercial()


class Quote():
    def __init__(self, person, words):
        self.person = person
        self.words = words

    def who(self):
        return self.person

    def says(self):
        return f"{self.words} ."


class QuestionQuote(Quote):
    def says(self):
        return f"{self.words} ?"


class ExclamationQuote(Quote):
    def says(self):
        return f"{self.words} !"


hunter = Quote('Elmer Fudd', "I'm hunting wabbits")
print(hunter.who(), "says", hunter.says())

hunted1 = QuestionQuote('Bugs Bunny', "What's up, doc")
print(hunted1.who(), 'says:', hunted1.says())

hunted2 = ExclamationQuote('Daffy Duck', "It's rabbit season")
print(hunted2.who(), 'says:', hunted2.says())


class BabblingBrook():
    def who(self):
        return "Brook"

    def says(self):
        return "Babble"


brook = BabblingBrook()


def who_says(obj):
    print(obj.who(), 'sayss', obj.says())


who_says(brook)


class Word():
    def __init__(self, text):
        self.text = text

    def __eq__(self, word2):
        return self.text.lower() == word2.text.lower()


first = Word("ha")
second = Word('HA')

print(first == second)

from collections import namedtuple

Duck = namedtuple("Duck", "bill tail")
duck = Duck("wide orange", "long")
print(duck.bill)

parts = {'bill': 'wide orange', 'tail': 'long'}
duck2 = Duck(**parts)
print(duck2)


class TennyClass():
    def __init__(self, name):
        self.name = name


teeny = TennyClass("itsy")
print(teeny.name)

from dataclasses import dataclass


@dataclass
class TeenyDataClass:
    name: str


teeny = TeenyDataClass("bitsy")
print(teeny.name)
