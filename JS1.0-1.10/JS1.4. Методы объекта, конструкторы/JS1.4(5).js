function Student(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
}

var student1 = new Student("Иван", "ivan@example.com", 20);
var student2 = new Student("Мария", "maria@example.com", 22);
var student3 = new Student("Петр", "petr@example.com", 21);

var students = [student1, student2, student3];

function studentsInfo() {
    var studentInfoElement = document.getElementById("student-info");

    var studentsHTML = "";
    students.forEach(function(student) {
        studentsHTML += "<p>Имя: " + student.name + "<br>Почта: " + student.email + "<br>Возраст: " + student.age + "</p>";
    });

    studentInfoElement.innerHTML = studentsHTML;
}

studentsInfo();
