class Username {
    constructor(name) {
        this.name = name;
    }

    showName() {
        document.getElementById("username").textContent = this.name;
    }
}

const user = new Username("Сергей");
user.showName();