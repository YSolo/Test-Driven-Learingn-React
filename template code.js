// Clock with CLASSES
// ------------------

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()} now</h1>
            </div>
        )
    }
}
// ===

// Clock with HOOKS
// ----------------

const Clock1 = props => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        }
    });

    function tick() {setDate(new Date());}

    return (
        <div>
            <h1>It is {date.toLocaleTimeString()} now</h1>
        </div>
    )
}
