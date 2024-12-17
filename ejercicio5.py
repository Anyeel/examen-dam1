import requests

# Datos para la petición
data = {
    "plomo": "a" * 100001,  # Cadena de más de 100000 caracteres
    "cobre": [1, 2, None, 4],  # Matriz con al menos 4 datos primitivos, incluyendo un valor nulo
    "gamma": {
        "g1": "1234",
        "g2": "5678",
        "g3": "9101"
    },
    "delta": str(int("1234") + int("5678") + int("9101")),  # Suma de los valores de gamma.g1, gamma.g2 y gamma.g3
    "alkahest": "4321"  # Número entero de cuatro dígitos convertido a string
}

response = requests.get("http://192.168.60.211:8000/alquimia", params=data)
print(response.text)