// props
const PersonInfo = (props) => {
    const { lastName, firstName, age } = props;
    return (
        <div>
            <p>Фамилия: {lastName}</p>
            <p>Имя: {firstName}</p>
            <p>Возраст: {age}</p>
        </div>
    );
};

// state
class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off",
            label: "Нажми"
        };
    }

    press = () => {
        const className = this.state.class === "off" ? "on" : "off";
        const label = this.state.class === "off" ? "Нажата" : "Нажми";
        this.setState({ class: className, label: label });
    };

    render() {
        return (
            <div>
                <button onClick={this.press} className={this.state.class}>
                    {this.state.label}
                </button>
                <p>Состояние: {this.state.class}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <PersonInfo lastName="Новиков" firstName="Сергей" age={22} />
        <ClickButton />
    </div>,
    document.getElementById("app")
);
