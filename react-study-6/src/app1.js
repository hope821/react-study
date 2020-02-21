class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1 className="h1"></h1>
				<span className="stats">Players: {this.props.totalPlayers}</span>
			</header>
		)
	}
}

class Player extends React.Component {
	render() {
		return(
			<div className="player">
				<span className="player-name">{this.props.name}</span>
				<Counter increment={this.props.increment} decrement={this.props.decrement}/>
			</div>
		)
	}
}

class Counter extends React.Component {
	state = {
		score: 0
	}

	increment = () => {
		const result = {score: this.state.score + 1}
		this.setState(result);
		// App(부모)에 있는 함수가 실행된다
		this.props.increment();
	}

	decrement = () => {
		const result = {score: this.state.score - 1}
		this.setState(result);
		this.props.decrement();
	}
	
	render() {
		return(
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrement}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		)
	}
}

class App extends React.Component {
	state = {
		totalScore: 0,
		players: [
			{name: 'AAA', score: 10},
			{name: 'BBB', score: 20},
			{name: 'CCC', score: 30},
			{name: 'DDD', score: 40},
		]
	}

	increment = () => {
		const result = {
			totalScore: this.state.totalScore + 1,
			players:[...this.state.players]
		}
		this.setState(result);
	}

	decrement = () => {
		const result = {
			totalScore: this.state.totalScore - 1,
			players:[...this.state.players]
		}
		this.setState(result);
	}

	render() {
		return(
			<div className="scoreboard">
				<Header totalPlayers={this.state.players.length} />
				{
					this.state.players.map(item => 
						<Player 
							name={item.name} 
							score={item.score} 
							increment={this.increment} 
							decrement={this.decrement} 
						/>)
				}
				<div className="player">total score: {this.state.totalScore}</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))