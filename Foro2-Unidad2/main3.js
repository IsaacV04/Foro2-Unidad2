const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('button');

// Función para obtener todos los usuarios registrados desde localStorage
function getAllUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}

// Función para guardar un nuevo usuario en localStorage
function saveUser(userData) {
    const users = getAllUsers();

    // Verificar si el nombre de usuario ya existe
    const existeUsuario = users.some(user => user.username === userData.username);

    if (existeUsuario) {
        alert('Nombre de usuario ya existe. Por favor, intente otro.');
        document.getElementById('registroForm').reset();
        return; // Salir de la función si el usuario ya existe
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('registroForm').reset();

    alert('Usuario registrado con éxito');
}

// Agregar un evento de clic al botón para manejar el registro de usuarios
button.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del botón (enviar el formulario)

    // Obtener los datos del usuario del formulario
    const userData = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    // Guardar el usuario
    saveUser(userData);

    // Verificar si el usuario se registró con éxito antes de mostrar el mensaje en la consola
    const users = getAllUsers();
    const existeUsuario = users.some(user => user.username === userData.username);
    if (!existeUsuario) {
        console.log('Nuevo usuario registrado:', userData);
    }
});

//Obtener y mostrar todos los usuarios registrados al cargar la página
window.onload = function() {
    const usuariosRegistrados = getAllUsers();
    if (usuariosRegistrados.length > 0) {
        console.log('Usuarios registrados:', usuariosRegistrados);
    } else {
        console.log('No hay usuarios registrados');
    }
};