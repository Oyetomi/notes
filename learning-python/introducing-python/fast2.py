places = ["McDonalds", "KFC", "Burger King", "Taco Bell", "Wendys", "Arbys", "Pizza Hut"]


def pick():
    import random
    """Returns radom fast food place"""
    return random.choice(places)
