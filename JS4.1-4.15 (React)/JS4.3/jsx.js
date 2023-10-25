const user = {
    id: 6,
    age: 22,
    firstName: 'Sergey',
    lastName: 'Novikov',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

const styleObj = {
    color: 'green',
    fontFamily: 'Verdana'
};

const userClassName = "user-info";

const userInfo = (
    <div className={userClassName} style={styleObj}>
        <p>Полное имя: {user.getFullName()}</p>
        <p>Возраст: {user.age}</p>
    </div>
);

ReactDOM.render(
    userInfo,
    document.getElementById("app")
);

