const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');


// Agrega un evento de clic al botón para manejar el inicio de sesión
button.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del botón (enviar el formulario)

    // Obtiene los valores del nombre de usuario y la contraseña del formulario
    const usernameValue = username.value;
    const passwordValue = password.value;

    // Obteiene todos los usuarios registrados desde el almacenamiento local
    const users = getAllUsers();
    // Busca al usuario por su nombre de usuario
    const user = users.find(user => user.username === usernameValue);

    if (user) {
        // Si se encuentra al usuario, verifica la contraseña
        if (user.password === passwordValue) {
            alert('Inicio de sesión exitoso');
            
            document.getElementById('loginForm').reset();
            
            // Redirigir al usuario a Pagina.html con el nombre de usuario como parámetro de consulta
            window.location.href = 'Pagina.html?username=' + usernameValue;
        } else {
            //Si la contraseña es incorrecta muestra una alerta
            alert('Contraseña incorrecta. Por favor, inténtelo de nuevo.');
        }
    } else {
        //Si no se encuentra el usuario, muestra una alerta para ingresar un usuariio existente
        alert('Usuario no encontrado. Por favor, regístrese primero.');
    }
});

// Función para obtener todos los usuarios registrados desde localStorage
function getAllUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}

// Obtener y mostrar todos los usuarios registrados al cargar la página
window.onload = function() {
    const usuariosRegistrados = getAllUsers();
    if (usuariosRegistrados.length > 0) {
        console.log('Usuarios registrados:', usuariosRegistrados);
    } else {
        console.log('No hay usuarios registrados');
    }
};

// Obtener el nombre de usuario de la URL
const urlParametro = new URLSearchParams(window.location.search);
const usernameDesdeURL = urlParametro.get('username');

// Mostrar el nombre de usuario en el título si está disponible
if (usernameDesdeURL) {
    document.getElementById('welcome').innerText = 'Bienvenido ' + usernameDesdeURL;
}