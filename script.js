const API_URL = "https://jsonplaceholder.typicode.com/users";
const nameColumn = document.getElementById("name");
const usernameColumn = document.getElementById("username");
const emailColumn = document.getElementById("email");
const phoneColumn = document.getElementById("phone");
const websiteColumn = document.getElementById("website");


function pedidoApi(API_URL) {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => recorrerData(data));
}

function crearElementos(column, data) {
    const h5 = document.createElement('h5');
    const h5Text = document.createTextNode(data);
    h5.appendChild(h5Text);
    h5.classList += "dato";
    column.appendChild(h5);
}

function recorrerData(data) {
    data.forEach(objeto => {
        crearElementos(nameColumn, objeto.name)
        crearElementos(usernameColumn, objeto.username)
        crearElementos(emailColumn, objeto.email)
        crearElementos(phoneColumn, objeto.phone)
        crearElementos(websiteColumn, objeto.website)
    });
}
pedidoApi(API_URL);