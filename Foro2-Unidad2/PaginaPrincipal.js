 // Obtener el nombre de usuario de la URL
 const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');

 // Mostrar el nombre de usuario en el título
 if (username) {
     document.getElementById('welcome').innerText = 'Bienvenido ' + username;
 }

 //Redirigir al registro de usuarios
 const button = document.getElementById('button');

 button.addEventListener ('click', (e) => {
    e.preventDefault();

    window.location.href = 'index.html'
 })