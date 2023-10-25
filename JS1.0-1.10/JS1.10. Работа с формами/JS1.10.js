document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    if (username && password) {
        localStorage.setItem(username, password);
        alert("Регистрация прошла успешно.");
        clearRegisterFields();
    } else {
        alert("Заполните все поля.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert("Вход выполнен успешно.");
        clearLoginFields();
    } else {
        alert("Неверный логин или пароль.");
    }
});

function clearRegisterFields() {
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerPassword").value = "";
}

function clearLoginFields() {
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}
