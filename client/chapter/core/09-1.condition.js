/* ---------------- */
/* Condition        */
/* ---------------- */


// const answer = prompt('자바스크립트의 \'공식\'이름은 무엇일까요?', '');
// if (answer === 'ECMAScript'){
//     console.log('정답입니다');
// }else {
//     console.log('모르셨나요? /n 정답은 ECMAScript 입니다!');
// }



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt(`그 영화 봤니?`);

// 영화 볼거니?
let goingToWatchMovie;



if (didWatchMovie === 'No'){
    goingToWatchMovie = prompt(`영화 볼거니?`);

    if (goingToWatchMovie === 'Yes') {
        console.log('나랑 같이 보자')
    } else {
        console.log('그렇구나')
    }
} else {
    console.log('잘봤구나')
}

//  prompt 쓸 필요 없이 Yes, No 선택지라면면 confirm 쓰면 됨

if (didWatchMovie) {
    // ...
}else {
    // ...
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
const message = didWatchMovie === 'Yes' ? '한번 봐봐' :
                goingToWatchMovie.includes('Yes') ? '언제볼까 ? 재밌겠다' :
                '그래..'

