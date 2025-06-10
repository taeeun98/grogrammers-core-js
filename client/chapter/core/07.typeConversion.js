/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const year = 2025;
console.log(String(year));
console.log(year + '');

// undefined, null
let days = null;
let undef;
console.log(days + '');
console.log(undef + '');

// boolean
let isClicked = false;
console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined 계산불가능 
let friend;
console.log(Number(friend));

// null 계산가능
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);

// boolean
let isActive1 = true;
let isActive2 = false;
console.log(isActive1 * 1);
console.log(isActive2 * 1);

// string
let num = '100';
console.log(num * 1);

// numeric string
let width = '120.5px';
console.log(Number(width));
console.log(width * 1);
console.log(width / 1);
console.log(+width);

console.log(parseInt(width, 10)); // 120 안전하게 10진수로 변환하겠다 명시하기
console.log(parseFloat(width, 10) + 10 + 'px'); //120 

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

Boolean(friend); //undefined

console.log(Boolean(friend)); //false
console.log(Boolean(money)); //false
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('0')); //true
console.log(Boolean('-1')); //true
console.log(Boolean(' ')); //true
console.log(!!{}); //true
console.log(!![false]); //true
console.log(Boolean(()=>{})); //true
