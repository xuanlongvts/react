const nongNo_and_tiKi = [
	{
		name: 'nongNo',
		score: 80
	},
	{
		name: 'tiKi',
		score: 50
	}
];

class SinglePlayer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isPassed: false
		}
	}
	componentWillMount(){
		this.setState({
			isPassed: this.props.score >= 60
		});

		console.log('componentWillMount => ', this.props.name);
	}
	componentDidMount(){
		console.log('componentDidMount => ', this.props.name);
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			isPassed: nextProps.score >= 60
		});

		console.log('componentWillReceiveProps => ', this.props.name + ' : ' + this.props.score);
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.score === this.props.score){
			console.log('shouldComponentUpdate => ', this.props.name + ' ? false');
			return false;
		}

		console.log('shouldComponentUpdate => ', this.props.name + ' ? true');
		return true;
	}
	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate => ', this.props.name);
		console.log('componentWillUpdate (nextProps) => ', nextProps);
		console.log('componentWillUpdate (nextState) => ', nextState);
	}
	componentDidUpdate(prevProps, prevState){
		console.log('componentDidUpdate => ', this.props.name);
	}
	componentWillUnmount(){
		console.log('componentWillUnmount: ', this.props.name);
	}

	render(){
		return(
			<div>
				<h5><span>Name: </span> {this.props.name}</h5>
				<p><span>Score: </span> <em>{this.props.score}</em></p>
				<p><span>Pass: </span>
					<input type="checkbox" 
						defaultChecked={this.state.isPassed} 
						disabled={true} 
					/>
				</p>
			</div>
		)
	}
}

class ScoreBoard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			player: nongNo_and_tiKi
		}
	}

	changeScore(amount){
		if(typeof (amount) !== 'number'){
			return false;
		}

		let player = this.state.player;
		let nong = player[0];
		nong.score = nong.score + amount;

		nong.score = (nong.score > 100) ? 100 : nong.score;
		nong.score = (nong.score < 0) ? 0 : nong.score;

		player[0] = nong;
		this.setState({
			player: player
		})
	}

	render(){
		return(
			<div>
				<h4>Score Board</h4>
				<div>
					<button
						onClick={(amount) => this.changeScore(5)}
					>
						Score of Nong: +5
					</button>{' '}
					<button
						onClick={(amount) => this.changeScore(-5)}
					>
						Score of Tiki: -5
					</button>
				</div>
				{
					this.state.player.map((item, key) => {
						return <SinglePlayer key={key} name={item.name} score={item.score} />
					})
				}
			</div>
		)
	}
}

class App extends React.Component{
	render(){
		return(
			<div>
				<h1>React Component Lifecycle Demo</h1>
				<ScoreBoard />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)