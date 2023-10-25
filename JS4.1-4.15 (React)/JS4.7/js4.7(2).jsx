
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        time: new Date()
        };
    }

    updateTime = () => {
        this.setState({
        time: new Date()
        });
    };

    componentDidMount() {
        this.timerID = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { time } = this.state;
        return (
        <div>
            <h1>Текущее время:</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("app")
);
