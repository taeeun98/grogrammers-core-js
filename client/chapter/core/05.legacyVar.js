/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

// var는 변수의 중복 선언을 허용합니다
// var는 블록 스코프를 무시합니다.

// let, const 는 블록 스코프를 가집니다.
var a = 10;
{
  //   var a = 20; //오류나서 주석처리
}
console.log(a);

// 선언하기 전 사용할 수 있는 var

console.log(c);

var c = 100;
// let c = 100;

var outside = 'outer';

// 함수 스코프 밖에 있는 var는 당연히 꺼내올수있음
function sum() {
  var inside = 'inside';
  console.log(outside);
}

sum();

// var 는 블록스코프는 없지만 함수스코프 안에 있으므로 에러뜸
// console.log(inside); //오류나서 주석처리
