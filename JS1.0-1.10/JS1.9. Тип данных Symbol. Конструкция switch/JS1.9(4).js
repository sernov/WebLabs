function checkString() {
    const phoneNumber = '88005553535';
    const inputString = document.getElementById('inputString').value;

    const firstChar = inputString.charAt(0);

    switch (firstChar) {
        case '1':
        case '2':
        case '3':
            document.getElementById("result").innerHTML = 'Первая цифра 1, 2 или 3<br>';
            break;
        default:
            document.getElementById("result").innerHTML = 'Нет<br>';
    }

    if (inputString.includes(phoneNumber)) {
        document.getElementById("result").innerHTML += 'Ваш номер телефона найден в строке.';
    } else {
        document.getElementById("result").innerHTML += 'Ваш номер телефона не найден в строке.';
    }
}
