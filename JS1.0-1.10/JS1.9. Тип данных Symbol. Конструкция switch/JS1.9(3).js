function determineQuarter() {
    const minutesInput = document.getElementById("minutesInput");
    const resultElement = document.getElementById("result");
    const min = parseInt(minutesInput.value);

    if (isNaN(min) || min < 0 || min > 59) {
        resultElement.textContent = "Некорректное значение. Введите число от 0 до 59.";
        return;
    }

    let quarter;
    switch (true) {
        case min >= 0 && min < 15:
            quarter = "первую четверть часа";
            break;
        case min >= 15 && min < 30:
            quarter = "вторую четверть часа";
            break;
        case min >= 30 && min < 45:
            quarter = "третью четверть часа";
            break;
        case min >= 45 && min <= 59:
            quarter = "четвертую четверть часа";
            break;
    }

    resultElement.textContent = `Введенное число ${min} попадает в ${quarter}.`;
}
