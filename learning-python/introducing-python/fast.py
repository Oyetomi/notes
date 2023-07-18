from random import choice

places = ["McDonalds", "KFC", "Burger King", "Taco Bell", "Wendys", "Arbys", "Pizza Hut"]


def pick():
    """Returns radom fast food place"""
    return choice(places)
