/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do {

//     console.log(i);

//     if (i ===3) {
//         break;
//     }

//     i++;

// } while(i < 5);

/* -------------------- */
// html에 태그를 만들고 내가 원하는 태그에 style 을 입히기 위해서
// html에 태그를 만들고 내가 원하는 태그를 동적 제어하기 위해서
// querySelector 를 사용했을때 null이 반환된다면, html을 제대로 읽지 못한 상태입니다.
// 이럴땐 defer 를 사용해 스크립트의 실행을 늦춰주세요.
// js를 사용해서 html에 접근하는 방식 (Documnet Object Model)
// Documnet Object Model = html 의 객체를 모델링 한것
// html 은 객체다. html 은 
// document 에 직접 접근해서 querySelector 를 돌리는거 성능이 좋지 않음.
// addEventListener()까지 이 두개가 가장 성능 부하를 가져오나, 현대 컴퓨터엔 체감할 정도는 아님
// 그래도 다른 방법이 있으면 다른 방법으로 하는게 좋음
/* -------------------- */

// const first = document.querySelector('.first');
// first.nodeType // = 1 = documnet.element_node
// 3 = text, 8 = comment(주석), 9 = document
// let second = first;

// do {
//     let second = second.nextSibling;

// } while (second.nodeType !== 1);

// console.log(second);


function next(node) {
    // validation (확인과정) =>  type guard
    // next('.first') next(first) 둘다 가능하게
    if (typeof node === 'string'){
        node = document.querySelector(node);
    }

    do{
        node = node.nextSibling;
    }
    while (node.nodeType !== 1);

    return node;
}

const second = next('.first');

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정