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

function crearElementos(tipo, column, data, id) {
    const h5 = document.createElement('h5');
    const h5Text = document.createTextNode(data);
    h5.appendChild(h5Text);
    //h5.classList += "dato mui--text-subhead";
    if (id % 2 == 0) {
        h5.setAttribute("class", `dato mui--text-subhead`);
    }
    else {
        h5.setAttribute("class", "dato mui--text-subhead fondoGris");
    }
    h5.setAttribute("id", `${tipo}${id}`);
    h5.addEventListener("click", () => { activateModal(id); });
    column.appendChild(h5);
}

function recorrerData(data) {
    data.forEach(objeto => {
        crearElementos("name", nameColumn, objeto.name, objeto.id)
        crearElementos("username", usernameColumn, objeto.username, objeto.id)
        crearElementos("email", emailColumn, objeto.email, objeto.id)
        crearElementos("phone", phoneColumn, objeto.phone, objeto.id)
        crearElementos("website", websiteColumn, objeto.website, objeto.id)
    });
}

function activateModal(id) {
    // initialize modal element
    var modalEl = document.createElement('div');
    modalEl.setAttribute("class", "modalEl");

    const perfil = document.createElement('h1');
    perfil.setAttribute("class", "mui--text-display1");
    const perfilText = document.createTextNode("Perfil");
    perfil.appendChild(perfilText);
    modalEl.appendChild(perfil);

    const imageAndName = document.createElement('div');
    imageAndName.setAttribute("class", "imageAndName");

    const img = document.createElement('img');
    img.src = `./img/image${id}.jpg`;
    img.setAttribute("class", "imgModal");
    imageAndName.appendChild(img);
    const name = document.createElement('h2');
    name.setAttribute("class", "mui--text-headline");
    const nameText = document.createTextNode(document.getElementById(`name${id}`).innerText);
    name.appendChild(nameText);
    imageAndName.appendChild(name);
    modalEl.appendChild(imageAndName);

    const otherData = document.createElement('div');
    otherData.setAttribute("class", "otherData");
    const phone = document.createElement('h3');
    phone.setAttribute("class", "mui--text-subhead");
    const phoneText = document.createTextNode(document.getElementById(`phone${id}`).innerText);
    phone.appendChild(phoneText);
    otherData.appendChild(phone);

    const email = document.createElement('h3');
    email.setAttribute("class", "mui--text-subhead");
    const emailText = document.createTextNode(document.getElementById(`email${id}`).innerText);
    email.appendChild(emailText);
    otherData.appendChild(email);

    const website = document.createElement('h3');
    website.setAttribute("class", "mui--text-subhead");
    const websiteText = document.createTextNode(document.getElementById(`website${id}`).innerText);
    website.appendChild(websiteText);
    otherData.appendChild(website);


    modalEl.appendChild(otherData);
    // show modal
    mui.overlay('on', modalEl);
}

pedidoApi(API_URL);