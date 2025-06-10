/* ---------------- */
/* Switch           */
/* ---------------- */


const a = 15;

switch (a) { 
    case 10: console.log('값이 낮아요'); break;
    case 15: console.log('정답입니다'); break;
    case 20:
    case 25: console.log('값이 높아요'); break;
    default: console.log('숫자를 입력해주세요');
// 코드 드래그 후 , ctrl + shift + J = 한줄로 바꾸기
}






const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
    case MORNING:
        console.log('뉴스 기사 글을 읽는다.');
        break;
    case LUNCH:
        console.log('자주 가는 식당에 가서 식사를 한다.');
        break;
    case DINNER:
        console.log('동네 한바퀴를 조깅한다.');
        break;
    case NIGHT:
        console.log('친구에게 전화를 걸어 수다를 떤다.');
        break;
    case LATE_NIGHT:
    case DAWN:
        console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
        break;
    default:
        break;
}

/* switch문 → if문 변환 --------------------------------------------------- */


/* switch vs. if -------------------------------------------------------- */

// const value = +prompt('0~6사이의 숫자를 입력해주세요.');
// 숫자로 바꾸기위한 +


// 함수는 하나의 기능만을 수행하는 것 목표 (클린코드)
// 함수는 재사용성을 고려해야한다. (유연한 함수수)

function getRandom(n) {
    const value = Math.floor(Math.random() * 7);
    return value;
} 


function getDay(value){
  // return 이 있으면 break가 없어도 됨
  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}


const day = getDay(getRandom(7));
console.log(day);


function getWeekend(day) {
    switch (day) {
        case '월': case '화': case '수': case '목': case '금': return '평일';
        case '토': case '일': return '주말';
    }
}

function weekend() {
    let day = getDay(getRandom(7));
    let weekend = getWeekend(day);
    console.log(`오늘은 ${day}요일 입니다. 그러므로 ${weekend}입니다.`)
}