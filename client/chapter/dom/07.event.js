/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode('.first');

function clickHandler(e) {
  console.log(e); // 어떤 메서드사용 가능한지 나와있음
}

function wheelHandler(e) {
  console.log(e.wheelDeltaY);

  if (e.wheelDeltaY > 0) {
    console.log('up');
  } else {
    console.log('down');
  }
}

function scrollHandler() {
  console.log('scroll');
}

first.addEventListener('click', clickHandler);
first.addEventListener('wheel', wheelHandler);
first.addEventListener('scroll', scrollHandler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall(e) {
  const { offsetX: x, offsetY: y } = e;
  // 객체가 들어오니까 바로 구조분해할당하기

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;
}

// ground.addEventListener('click', handleBall);

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function handleMove(e) {
  console.log(e);
  console.log(this);
}


//debounce 움직임이 멈췄을때 실행. mousemove, resize, input event 등
function debounce(f, limit = 1000) {
    let timeout;
    
    // 클로저 사용해서 timeout 변수를 캡슐화.
    return function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            f.call(this, e);
        }, limit);
    };
}
ground.addEventListener('mousemove', debounce(handleMove));


//throttle 연속적 실행은 안되게. 몇초에 한번만 가능하게
function throttle(f, limit) {
  let wait = false;

  return function(e) {
    if (!wait) {
      f.call(e.target, e);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
ground.addEventListener('mousemove', throttle(handleMove));


