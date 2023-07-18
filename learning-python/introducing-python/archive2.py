import webbrowser

import requests

print("Let's find an old website.")
site = input("Type a website URL: ")
era = input("Type a year, month, and day, like 20150613: ")

url = f'http://archive.org/wayback/available?url={site}&timestamp={era}'
response = requests.get(url)
data = response.json()
try:
    old_site = data["archived_snapshots"]["closest"]["url"]
    print("Found this copy", old_site)
    print("It should appear in your browser now.")
    webbrowser.open(old_site)
except Exception:
    print("Sorry, no luck finding", site)