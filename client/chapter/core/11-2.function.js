/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);



// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {
    let total = 0;
    /*
    //집합 데이터
    //함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments
    //전달된 인수들을 유사 배열 형태로 저장한 객체
    

    // for(let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }

    for(let value of arguments){
        total += value;
    }

    return total;
    */

        
    //배열의 메서드
    // forEach, reduce, map, filter
    // const arr = Array.prototype.slice.call(arguments); // array instance method 빌려쓰는거기 때문에 call 붙여야
    // const arr = Array.from(arguments); // array static method
    const arr = [...arguments]; //spread syntax 전개구문

    // arr.forEach(function(value){
    //     total += value;
    // })

    // arr.forEach(value => {
    //     total += value;
    // });


    // return total = arr.reduce(function(acc, current, index){
    //     return  acc + current // 이 결과가 acc 로 누적되어서 다시 계산됨 return 꼭 하기
    // },0) //0을 넣으면 초기값을 설정하는것, 설정하지 않으면 prev 에 [0]의 값이 들어가게 됨
    // prev 를 보통 acc 누적값, 누산기 라고 함

    //forEach : 값 반환하지 x 
    //reduce : 새로운 값을 반환
    //map : 새로운 배열을 반환환

    // arguments = 유사배열인데, 1회성으로만 유사배열형태로 만들고싶다면
    // forEach 빌려쓰기 .call
    
    // Array.prototype.forEach.call(arguments, function(value){
    //     total += value;
    // })

    // 바꿔치기
    // arguments.__proto__ = Array.prototype;
    // console.log(arguments);
    

    // map 은 forEach 와 매우 비슷
    // 기존 배열에 약간 변형한 새로운 배열을 반환하고싶다면 map 사용용
    const friends = ['이승윤', '이소민', '황유정', '문태민'];

    const newFriends = friends.map(function(name, index) {
        return `[FE]${name}`
    });




};

const result = calculateTotal(1000, 3000, 5000, 2300);

console.log(result);










// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail) {
    
    if (condition) {
        success(); //js 에서 함수는 값이니까 전달해서 진짜 함수처럼 쓸수있다.
    }else {
        fail();
    }
};

// 콜백함수할땐 보통 개행함
cb(
    true,
    function() {console.log('성공');
    },
    function(){console.log('실패')}
);
// 에로우펑션 이용하면 완전 간결
// cb(
//     true,
//     () => console.log('성공'),
//     () => console.log('실패')
// );




// 콜백함수 : 	다른 함수의 인자로 전달되어 나중에 실행되는 함수
// 콜백함수를 쓰는 이유
//비동기 처리 (setTimeout, AJAX, 이벤트 핸들링)
//사용자 정의 흐름 제어 (예: 위 코드처럼 조건에 따라 다른 함수 실행)
//함수 재사용성 향상

// 0:32:54
function movePage(url, success, fail) {
    if(url.includes('https')){
        success(url);
    }else{
        fail();
    }
}

movePage(
    'https://www.naver.com',
    function (url) {
        console.log(`해당 사이트는 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다`);
        // setTimeout(()=>{
        //     location.href = url;
        // }, 3000);
    },
    function () {
        console.log(`잘못된 url 정보를 입력하셨습니다`);
    }
)


/* 이럴때 콜백함수가 필요해진다,.
function getGeolocation() {
  let data;

  navigator.geolocation.getCurrentPosition(function(so){
    data = so.coords.latitude;
  }); //서버통신이라 시간이 걸려서 함수 내에서 바로 담을수없음
  //근데 몇초가 걸릴지 알수없으니 settimeout 보다는 콜백으로.

  return data;
}

console.log(getGeolocation());
*/


function getGeolocation(success) {
    //위치서비스 가져오는 코드
    navigator.geolocation.getCurrentPosition(function(so) {
        const data = so.coords.latitude;
        success(data);  // ✅ 콜백 함수 호출 //arguments
    });
}

getGeolocation(function(value) {
    console.log(value);  // 성공적으로 위도 출력
});





// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// encapsulation (캡슐화화)
// 익명함수 만들고 , 소괄호로 감싸고, () 실행.
(function(){
    var c = 10;
    console.log(c);
    
})()

// console.log(c); //c is not defined



const MASTER = (function () {
  var uuid = 'zxasnzxj!@#as8d_12387zj$$!ak';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    }
  }
})();


console.log(MASTER);







//rem(pxValue: number|string, base:number):string;
// 들어오는 값은 숫자나 문자, 베이스가 있다면 기본 폰트로 설정, 내보내는값은 문자(rem이 붙어야하므로)


function rem(size, base = 16) {
    if(!size) {
        throw new Error('rem 함수의 첫번째 인수는 필수 입력 값입니다');
    }

    if(typeof base === 'string'){
        throw new TypeError('rem 함수의 두번쨰 인수는 숫자형입니다');
    }

    if(typeof size === 'string'){
        size = parseFloat(size);
        // size = parseInt(size);
    }

    return size / base + 'rem';
}


console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');




// setter function
function setCss(element, prop, value) {

    // element 가 문자열이 아닌 엘리먼트 자체로 올수있는걸 고려해야함함
    if(typeof element === 'string') {
        // 이게 없으면 element 가 문자열임
        element = document.querySelector(element);
    }
    
    if((prop in document.body.style)){
        throw new ReferenceError('setCss 의 두번째 인수는 유효한 css 속성이어야 합니다다')
    }

    if(!value){
        throw new Error('setCss의 세번째 인수는 필수입력값입니다')
    }

    // .표기법은 prop 이라는 property 를 새로 만들어서 orange 를 할당함
    // 값을 할당하려면 무조건 대괄호 표기법으로
    element.style[prop] = value;
}

setCss('.first','color','orange');


// getter function
function getCss(node, prop) {

    if(typeof node === 'string'){
        node = document.querySelector(node);
    }

    if(!(prop in document.body.style)){
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }

    return getComputedStyle(node)[prop];
}

const fontSize = getCss('.first','color','orange') //'28px'



function css(node, prop, value) {
  if (!value) {
    return getCss(node, prop);
  } else {
    setCss(node, prop, value);
  }
}

css('.first', 'color');           // get
css('.first', 'color', 'blue');   // set