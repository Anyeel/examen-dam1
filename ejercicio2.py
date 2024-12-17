import requests

response = requests.patch("http://192.168.60.211:8000/metodo")
print(response.text)

bandera = "patchwork"