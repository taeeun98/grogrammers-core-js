import { diceAnimation, getNode } from './lib/index.js';
// import organize 개발자 검색창에 쳐서 적용하면 됨
// shift alt O


/*
1. 주사위 굴리기 버튼을 선택
   - querySelector or getNode

2. 클릭 이벤트 바인딩
   - click

3. 버튼 클릭시 diceAnimation 애니메이션 동작
   - setInterval diceAnimation

4. 같은 버튼을 눌렀을 때 토글 처리
   - 상태 변수 만들기
     - isClicked = false;
     - isClicked = !isClicked;
   - 조건 처리

5. 애니메이션 재생 or 정지
   - setInterval
   - clearInterval
*/

// 구조분해할당
const [rollingButton, recordButton, resetButton] = document.querySelectorAll(
  '.buttonGroup button'
);

const recordListWrapper = getNode('.recordListWrapper');
let num = 0;
let total = 0;



// function handleRollingDice() {
//   // 전역변수를 줄이기 위한 클로저
//   let isClicked = false;
//   let id;
//   // 클로저를 위한 return 
//   return () => {
//     if (!isClicked) {
//       id = setInterval(diceAnimation, 100);
//     } else {
//       clearInterval(id);
//     }
//     isClicked = !isClicked;
//   };
// }
// rollingButton.addEventListener('click', handleRollingDice());

//addEventListener에 () 없애려면 함수를 바로 실행하면 됨.
const handleRollingDice = (() => {

  // 전역변수를 줄이기 위한 클로저
  let isClicked = false;
  let id;

  // 클로저를 위한 return 
  return () => {
    if (!isClicked) {
      id = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(id);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();


function createItem(dice) {
  return /* html */`
    <tr>
      <td>${++num}</td>
      <td>${dice}</td>
      <td>${total += Number(dice)}</td>
    </tr>
  `
}


function renderRecordItem() {
  const dice = document.querySelector('#cube').getAttribute('dice');
  const html = createItem(dice);

  document.querySelector('.recordList tbody').insertAdjacentHTML( 'beforeend', html);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}


function resetRecord() {
  num = 0;
  total = 0;
  document.querySelector('.recordList tbody').innerHTML = '';
}


function handleReset() {
  recordListWrapper.hidden = true;
  resetRecord();
}


rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
