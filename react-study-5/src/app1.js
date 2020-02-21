/* 
1. 리액트 컴포넌트의 종류
	- 함수형 컴포넌트 (속성을 가지고 있지 않다.)
	- 클래스형 컴포넌트 (속성을 가지고 있다.)

	- 함수형 ㅋㅁ포넌트 기본
	const Header = () => {
		return ()
	}

	- 클래스형 컴포턴트 기본
	class Header extends React.Component {
		constructor() {

		}
		render () {
			return ()
		}
	}
*/

/*
const Header = () => {
	return (
		<header className="header">
			<h1 className="h1">Scoreboard</h1>
			<span className="stats">Player: 1</span>
		</header>
	)
}
*/
class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1 className="h1">Scoreboard</h1>
				<span className="stats">Player: {this.props.total}</span>
			</header>
		)
	}
}

/*
const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{props.score}</span>
			<button className="counter-action increment"> + </button>
		</div>
	)
}
*/
class Counter extends React.Component {
	state = {
		score: 0
	}

	increment = () => {
		const newScore = {score: this.state.score + 1}
		this.setState(newScore)
	}
	decrement = () => {
		const newScore = {score: this.state.score - 1}
		this.setState(newScore)
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrement}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		)
	}
}

/*
const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">{props.name}</span>
			<Counter score={props.score}/>
		</div>
	)
}
*/
class Player extends React.Component {
	render() {
		return (
			<div className="player">
				<span className="player-name">{this.props.name}</span>
				<Counter score={this.props.score}/>
			</div>
		)
	}
}

// const des = [
// 	(<p>0000여기는 텍스트 입니다.</p>), 
// 	(<p>1111여기는 텍스트 입니다.</p>)
// ]

// const playerArray = [<Player/>,<Player/>,<Player/>]

// const App = (porps) => {
// 	// {initPlays: [props]}
// 	return (
// 		<div className="scoreboard">
// 			<Header/>
// 			{props.initPlayers.map(item => <Player name={item.name} score={item.score} />)}
// 			{/* 
// 			{playerArray}
// 			{des[0]}
// 			{des[1]} 
// 			*/}
// 		</div>
// 	)
// }

class App extends React.Component {
	state = {
		players: [
			{name: 'johnny', score: 100},
			{name: 'AAA', score: 11},
			{name: 'BBB', score: 22},
			{name: 'CCC', score: 33},
			{name: 'DDD', score: 44},
		]
	}

	addPlayer = () => {
		const newPlayer = {name:'ZZZ', score:0}
		this.setState(
			{players: [...this.state.players, newPlayer]}
		)
	}

	render() {
		return (
			<div className="scoreboard">
			<Header total={this.state.players.length}/>
			{this.state.players.map(item => <Player name={item.name} score={item.score} />)}
			<button onClick={this.addPlayer}>선수입장</button>
		</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
