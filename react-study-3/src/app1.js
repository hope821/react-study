function Title() {
	return (
		<h1>타이틀</h1>
	)
}

function Des() {
	return (
		<p>설명</p>
	)
}
// 외부 변수
var text = '안녕하세요'

function Header() {
	return (
		<header>
			<Title></Title>
			<Des></Des>
			{/* 외부 변수 참조 */}
			<p>{text}</p>
		</header>
	)
}

ReactDOM.render(<Header/>, document.querySelector('#root'));