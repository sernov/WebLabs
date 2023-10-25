function Group() {
    this.names = ["Роман", "Илья", "Семен", "Владимир", "Алексей", "Максим", "Кирилл", "Анна", "Виктор", "Маргарита", "Анастасия", "Сергей", "Евгений", "Сергей"];
    this.printNames = function() {

        let pElement = document.getElementById("group-names");

        pElement.innerHTML = "Группа: " + this.names.join(", ");
    };
}

let myGroup = new Group();

myGroup.printNames();