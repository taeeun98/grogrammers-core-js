/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
        position: 'fixed',
        ['z-index']: 10000,
        top: '50%',
        left: '50%',
        width: '60vw',
        maxWidth: 800,
        height: '40vh',
        minHeight: 280,
        transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;

authUser = {
    uuid: 'asdasd',
    name: 'tiger',
    email: 'asd@naver.com',
    isSignIn:false,
    permission: 'paid'
}

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는? => Object.keys
// 객체의 value만을 모아서 배열로 반환하는 객체의 static method는? => Object.value
// 객체의 key 와 value 를 하나의 쌍으로로 모아서 배열로 반환하는 객체의 static method는? => Object.entries
// 이걸 함수로 직접 구현하면?
function getKeys(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}

getKeys(authUser);

function getEntries(obj){
    let arr = [];
    
    for(const key in obj){
        if(Object.hasOwn(obj, key)){
            arr.push([key, obj[key]]);
        }
    }

    return arr;
}

getEntries(authUser);





// 제거 remove vs 삭제 delete
// 비워두기        메모리 제거
function removeProperty(obj, key) {
    
    // 이렇게 하면 null 이나 [] 도 object 로 들어와서 오류가 남.
    // Object.prototype.toString.call() 으로 가져와야함
    // if(typeof obj === 'object'){
    //     obj[key] = null;
    // }

    // 이건 너무 김김
    // if(Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === 'object') {
    //     obj[key] = null;
    // } else {
    //     throw new Error('removeProperty 함수의 첫번째 인수는 객체 타입만 사용할 수 있습니다.')
    // }

    // isObject 사용하기기
    if(isObject(obj)) {
        obj[key] = null;
    } else {
        throw new Error('removeProperty 함수의 첫번째 인수는 객체 타입만 사용할 수 있습니다.')
    }
}

removeProperty(authUser, 'email');



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name, age, phone) {
    return {
        name: name,
        age: age,
        [calculateProperty + '번호']:phone
    }
}



// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
    name,
    email,
    authorization,
    isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_000];

// 구조분해 할당 (재할당하는것)
const [a1, a2, a3, a4] = arr;
console.log(a1, a2, a3, a4);

const [first, second] = document.querySelectorAll('span');
console.log(first, second);


for(const [k, v] of Object.entries(authUser)){
    // const key = keyValue[0];
    // const value = keyValue[1];

    console.log(k, v);
    
}

Object.entries(authUser).forEach(([k,v]) => console.log([k,v]));

const mapArray = Object.entries(authUser).map(([_,v]) => v);
console.log(mapArray);



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 객체는 순서가 상관없기 때문에 순서 지정 없이 할당 가능
// 객체 구조 분해 할당 후 , 변수처럼 사용가능
// 별칭 alias 설정 가능
const salaries = {
    김태은: 400,
    김바보: 30,
    김미모: 130
}

const {김태은:태, 김바보, 김미모} = salaries;
console.log(김바보, 태, 김미모);

// 객체 안의 것도 꺼내올수있음음
const {log:g} = console;
g('aa')


const data = {
    name:'심선범',
    age:35,
    address:'별내',
    phone:'010-1234-1234',
    job: '강사'
}

function createUserObject(obj) {

    const {name, age, address,phone, job} = obj;

    return {
        name,
        age,
        address,
        phone,
        job
    }
}

const user = createUserObject(data);

g(user);




