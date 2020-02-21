// reactJS로 h1태그 생성
// React.createElement('h1', null, 'This is a title');
const title = (
	<h1>This is a title</h1>
)

// React.createElement('p', {id:'description'}, 'This is a description');
const des = (
	<p id="description">This is a description</p>
)

const header =  (
	<header>
		{title}
		{des}
		<p>This is a descritpion 2</p>
	</header>
)
// React.createElement('header', null, title, des)

// id="root"에 title 객체를 랜더(그려준다)한다.
ReactDOM.render(header, document.querySelector('#root'));