/* eslint-disable no-constant-binary-expression */
/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b; //'' 

// a &&= b; //Logical AND Assignment 논리곱 할당 연산
// a = a && b; //같은 코드


// 논리합(또는) 연산자
let AorB = a || b; //10
// a ||= b;

// 부정 연산자
let reverseValue = !value; //true


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy= true && '' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy= false || '' || [2,3].length || {thisIsFalsy:true};


let userName = prompt('어디로 로그인 하시겠습니까?');
console.log('userName =  ', userName);
console.log('userName.trim.toUpperCase =  ', userName.trim().toUpperCase());

// null 일때를 방지해서 맨 위로 올리거나, password?.toLowerCase() 하면됨
function logIn(){
    if(!userName) return //방어로직

    if (userName === null || userName === ''){
        alert('취소되었습니다.');
    }else if (userName.trim().toLowerCase() === 'admin'){
        let password = prompt('비밀번호를 입력하세요.');
        
        if(password === null || password === ''){
            console.log('비밀번호를 취소하였습니다.')
        }else if(password.trim().toLowerCase() === 'themaster'){
            console.log('환영합니다!')
        }else {
            console.log('인증에 실패했습니다')
        }
    } else {
        alert('로그인 방식이 틀렸습니다.')
    }
}

logIn();