// reactJS로 h1태그 생성
const title = React.createElement('h1', null, 'This is a title');

const des = React.createElement('p', {id:'description'}, 'This is a description');

const header = React.createElement('header', null, title, des)

// id="root"에 title 객체를 랜더(그려준다)한다.
ReactDOM.render(header, document.querySelector('#root'));