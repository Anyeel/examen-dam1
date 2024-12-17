import requests

# URL del endpoint
url = "http://192.168.60.211:8000/shared_data"

# Datos a enviar
data = {"dato": "valor"}

# Realizar la petición POST
response = requests.post(url, json=data)

# Datos a enviar como parámetros en la URL
params = {"dato": "valor"}

# Realizar la petición POST con parámetros en la URL
response = requests.post(url, params=params)

# Mostrar la respuesta (la bandera)
print(response.text)

bandera1 = "n1c3j0b!"
bandera2 = "g00db0t"
