function Header(props) {
	//props = {title:'Johnny's scroeboard', players: 1+10}
	return (
		<header className="header">
			<h1 className="h1">{props.title}</h1>
			<span className="stats">Players : {props.players}</span>
		</header>
	);
}

function Player(props) {
	// {name:'LDK', scrole:100}
	return (
		<div className="player">
			<span className="player-name">
				{props.name}
			</span>
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{props.scrore}</span>
				<button className="counter-action increment"> + </button>
			</div>
		</div>
	)
}

function App() {
	return (
		<div className="scoreboard">
			{/* title은 props로 자식 컴포넌트인 Header에 데이터를 보낸다 */}
			<Header title="johnny's scroeboard" players={1+10}/>
			{/* Header({title:'dafaf', players: 1+10}) */}
			<Player name="KJH" scrore="100"/>
			{/* Player({name:'LDK', scrore:100}) */}
			<Player name="AAA" scrore="20"/>
			<Player name="BBB" scrore="30"/>
			<Player name="CCC" scrore="50"/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))