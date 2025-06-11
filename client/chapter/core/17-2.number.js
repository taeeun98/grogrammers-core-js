
// 삼각함수 = 원운동, 원하는 각도로 이동, 진동, 눈 내리는 애니메이션 등에 쓰임
function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

// => 45도는 radian 값으로 0.7853...

const circle = document.querySelector('.circle');
let degree = 45;
let radius = 10;
let lastInsertTime = 0;


function animation() {
  
  degree += 0.3;
  radius += 0.1;

  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;

  // circle.style.transform = `translate(${x}px,${-y}px)`;

  const currentTime = Date.now();

  if(currentTime - lastInsertTime >= 300){
      const tag = `
      <div style="transform:translate(${x}px,${-y}px)">🐯</div>
    `
    
    document.querySelector('.space').insertAdjacentHTML('beforeend',tag);

    lastInsertTime = currentTime

  }
}

setInterval(animation, 0);