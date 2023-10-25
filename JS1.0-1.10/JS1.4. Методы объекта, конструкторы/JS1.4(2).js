// Создаю объект покупателя
var customer = {
    name: "Анна",
    age: 25,
    email: "anna@example.com",
    phoneNumber: "+7 123-456-7890",
    address: "ул. Примерная, д. 123"
};

// Вывожу информацию о покупателе на страницу
document.getElementById("name").textContent = customer.name;
document.getElementById("phone").textContent = customer.phoneNumber;
document.getElementById("address").textContent = customer.address;

