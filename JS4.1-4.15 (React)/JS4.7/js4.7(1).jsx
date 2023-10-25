class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        class: "off",
        label: "Нажми",
        };
        console.log("constructor");
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate()");
    }

    press() {
        let className = this.state.class === "off" ? "on" : "off";
        this.setState({ class: className });
    }

    render() {
        console.log("render()");
        return (
            <div>
                <button onClick={() => this.press()} className={this.state.class}>
                    {this.state.label}
                </button>
                <p>Состояние: {this.state.class}</p>
            </div>
        );
    }
}


ReactDOM.render(<ClickButton />, document.getElementById("app"))
