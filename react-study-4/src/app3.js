// 1. 함수 형 컴포넌트
// 2. props
// 3. 동적 렌더링

const players = [
	{name: 'KJH', score: 100},
	{name: 'CJW', score: 10},
	{name: 'STH', score: 20},
	{name: 'LHS', score: 30},
	{name: 'DDD', score: 30},
]

// 공부할것
// 1. ES6 class
/*
함수형 컴포넌트 기본 형 - 자기자신의 데이터가 없다.
const Counter = () => {
	return ()
}

클래스형 ㅋㅁ포넌트 기본 형 - 자기 자신의 데이터가 있다. state
class Counter extends React.Component {
	constructor() {
		super();
	}
	render() {
		return ()
	}
}
*/

class Counter extends React.Component {
	constructor() {
		super();
	}

	state = {
		score: 0
	}

	incrementScore = () => {
		console.log('incrementScore');
		this.setState(
			{score: this.state.score + 1}
		)
	}

	decrementScore = () => {
		console.log('decrementScore');
		this.setState(
			{score: this.state.score - 1}
		)
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		)
	}
}

// const Header = function() {..} <-- ES5(구식)
// ES6
const Header = (props) => {
	return(
		// props = {title: "My scroeboard"}
		<header className="header">
			<h1 className="h1">{props.title}</h1>
			<span className="states">Players: {props.totalPlayers}</span>
		</header>
	)
}

// var는 ES5 / let, const는 ES6 : 
// var는 재선언이 가능하다. 새로운 값을 대입할 수 있다.
// let는 재선언이 불가능하다. 새로운 값을 대입할 수 있다.
// const 재선언이 불가능하다. 새로운 값을 대입할 수 없다.
const Players = (props) => {
	return(
		<div className="player">
			<span className="player-name">
				{props.name}
			</span>
			<Counter score={props.score} />
		</div>
	)
}

const App = (props) => {
	// props = {initialPlayers: players}
	return(
		<div className="scoreboard">
			{/* title: "My scroeboard" */}
			<Header title="My scoreboard" totalPlayers={1+2} />
			{/* <Players name="KJH" score={100} /> */}
			{/* 
				공부할 것 
				1. Array.map

				props.initialPlayers.map(function(item) {
					return <Players name={item.name} score={item.score}/>
				})

				item = {name: 'KJH', scroe: 50},
				<Players name={item.name} score={item.score}/>
			*/}
			{props.initialPlayers.map(item => <Players name={item.name} score={item.score}/>)}
		</div>
	)
}

ReactDOM.render(<App initialPlayers={players} />, document.querySelector('#root'))