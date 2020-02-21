// 공부할 것
// 1. class의 개념

// 클래스를 만드는 방법
// 선ㅇㄴ방법(ES5)
function People1(){
	this.speak = function() {
		console.log('my name is People1');
	}
}

// 사용 방법
var man1 = new People1();
man1.speak();

// 선언 방법(ES6)
class People2 {
	constructor() {
		this.speak = function() {
			console.log('my name is People2');
		}
	}
}

const man2 = new People2;
man2.speak();