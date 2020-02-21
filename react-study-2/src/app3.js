// reactJS로 h1태그 생성
// const title = React.createElement('h1', null, 'This is a title');

// const des = React.createElement('p', {id:'description'}, 'This is a description');

// const header =  (
// 	<header>
// 		{title}
// 		{des}
// 		<p>This is a descritpion 2</p>
// 	</header>
// )
// React.createElement('header', null, title, des)

// 컴폰너트 : 재사용이 가능한 React UI (개발자가 개발 방향성 및 목적에 따라서 자유롭게 구성한다.)
// 함수형 컴포넌트 : 함수인데 컴포넌트의 역할을 수행
function Title() {
	return (
		<h1>Component Title</h1>
	)
}

function Des() {
	return (
		<p>Component description</p>
	)
}

function Header() {
	return (
		<header>
			<Title/>
			<Des/>
		</header>
	)
}

// id="root"에 title 객체를 랜더(그려준다)한다.
ReactDOM.render(<Header/>, document.querySelector('#root'));