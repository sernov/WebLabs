function Hello() {
    return <h1>Привет</h1>;
  }

class HelloClass extends React.Component {
render() {
    return <h1>Привет</h1>;
}
}

var HelloArrow = () => {
return (<h1>Привет</h1>);
}

function Timer() {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Seconds: {seconds}</div>;
}

class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div>Seconds: {this.state.seconds}</div>;
    }
}

const TimerArrow = () => {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Seconds: {seconds}</div>;
}

ReactDOM.render(
    <div>
        <h2>Timer Functional Component:</h2>
        <Timer />

        <h2>Timer Class Component:</h2>
        <TimerClass />

        <h2>Timer Arrow Function Component:</h2>
        <TimerArrow />

        <h2>Hello Functional Component:</h2>
        <Hello />

        <h2>Hello Class Component:</h2>
        <HelloClass />

        <h2>Hello Arrow Function Component:</h2>
        <HelloArrow />
    </div>,
    document.getElementById("app")
);
