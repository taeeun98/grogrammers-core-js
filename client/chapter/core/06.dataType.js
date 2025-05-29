/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
// null
// 2. 값이 할당되지 않은 상태
// undefined
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
// 문자형
// 4. 정수, 부동 소수점 숫자(길이 제약)
// 숫자형
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// bigint
// 6. 참(true, yes) 또는 거짓(false, no)
// boolean
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// object
// 8. 고유한 식별자(unique identifier)
// symbol

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */
// 1) 연산자 typeof
// 2) 함수 typeof()
// 둗다 결과 차이없음

// 언어 상, 오류
// => null

// Object
// => Object

// Array
// => Object

// function
// => function

// this
// => object

let my_numbers = 513658235;

function solution(my_numbers) {
  let my_numbers_str = String(my_numbers);
  let total_num = 0;

  for (let i = 0; i < my_numbers_str.length; i++) {
    total_num += Number(my_numbers_str[i]);
    console.log('total_num = ' + total_num);
  }

  if (total_num % 2 == 0) {
    console.log('짝수');
    return 'even';
  } else {
    console.log('홀수');
    return 'odd';
  }
}

console.log(solution(my_numbers));
