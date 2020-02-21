// 함수 형 컴포넌트
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
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{props.score}</span>
				<button className="counter-action increment"> + </button>
			</div>
		</div>
	)
}

const App = () => {
	return(
		<div className="scoreboard">
			{/* title: "My scroeboard" */}
			<Header title="My scoreboard" totalPlayers={1+2} />
			<Players name="KJH" score={100} />
			<Players name="CJW" score={10} />
			<Players name="STH" score={20} />
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'))