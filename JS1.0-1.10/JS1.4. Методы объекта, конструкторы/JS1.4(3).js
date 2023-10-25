var user = {
    name: "Иван",
    age: 25,
    email: "ivan@example.com"
};

var order = {
    orderId: "12345",
    product: "Карбонара",
    count: 2,
    totalAmount: 500
};

var restaurant = {
    name: "Ресторан 'Вкусняшка'",
    location: "Город, Улица, Дом",
    rating: 4.5
};

function displayUserInfo() {
    var userInfo = "Имя: " + user.name + "<br>Возраст: " + user.age + "<br>Email: " + user.email;
    return userInfo;
}

function displayOrderInfo() {
    var orderInfo = "Номер заказа: " + order.orderId + "<br>Товар: " + order.product + "<br>Количество: " + order.count + "<br>Общая сумма: " + order.totalAmount + " руб.";
    return orderInfo;
}

function displayRestaurantInfo() {
    var restaurantInfo = "Название ресторана: " + restaurant.name + "<br>Местоположение: " + restaurant.location + "<br>Рейтинг: " + restaurant.rating;
    return restaurantInfo;
}

var outputElement = document.getElementById("output");

if (user.age >= 18) {
    outputElement.innerHTML = displayUserInfo();
} else if (order.totalAmount > 100) {
    outputElement.innerHTML = displayOrderInfo();
} else {
    outputElement.innerHTML = displayRestaurantInfo();
}
