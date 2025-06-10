/* ---------------- */
/* Operators        */
/* ---------------- */


// const first = prompt('첫 번째 값') * 1;
// const second = prompt('두 번째 값') * 1;

//아래 코드보다 더 쉽게 처음에 값 넣을때 변경해주기기
// console.log(Number(first) + Number(second));
// console.log(+first + +second);
// console.log((first / 1)+ (second / 1));
// console.log((first * 1)+ (second * 1));
// 콘솔창에서 하얀 글씨는 문자형이라는 것, 브라우저에서 넘어오는값들은 문자형
// prompt 는 취소 or ESC를 누르게 되면 null 을 주고, 그걸 숫자로 바꾸게 되면 0을 넣어준다.
// 아무것도 입력 안하고 확인 누르면 '' 빈문자가 담기고 스페이스는 ' ' 공백이 담긴다.


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상


let a = '10';
let b = '30';


// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
let ternary = a > 5 ? true : false;
//(condition) ? : value1 : value2
//예시
console.log(`안녕 너를 만나서 ${a > 5 ? '최고야' : '최악이야'}`);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 2 - 1;

// 산술 연산자: 곱셈
let multiplication = 1 * 2;

// 산술 연산자: 나눗셈
let division = 2 / 4;

// 산술 연산자: 나머지
let remainder = 4 % 2;
console.log(remainder % 2 === 0 ? '짝수' : '홀수');


// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6]; //1,2,34,5,6
console.log(onlyWorkDefaultValues);

let first = [1,2,3];
let second = [4,5,6];
console.log(first.concat(second)); //concat은 배열 메소드 (근데 너우 오래돼서 안씀)

//전개 구문  spread syntax
//전개 연산자 spread operator
console.log([...first, ...second]);
// ... 이 전개임. 그래서 배열안의 내용을 펼치고, 콤마를 넣고, 그걸 대괄호에 넣으면 됨


// 함수안에 ... 들어가면 rest parameter 
function sum(...rest) {
    
}



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// 2 * 5 + 125 = 135

