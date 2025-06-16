/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const links = document.querySelectorAll('a');
const nav = document.querySelector('.navigation');




nav.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target.closest('li'));

  const target = e.target.closest('li');

  /* 클래스를 사용한 위임 ---------------- */
  // about 클래스가 있는 li에게만 hit 문자 출력
  //   if (target.matches('.about')) {
  if (target.classList.contains('about')) {
    console.log('hit');
  }


  /* 속성을 사용한 위임 ------------------ */
  // 너 그 속성 가지고 있어? getAttribute
  console.log(target.getAttribute('data-name'));
  console.log(target.dataset.name);
  
  if(target.dataset.name === 'contact'){
    console.log('contact!');
  }

  /* 노드를 사용한 위임 ------------------ */
  if(target.nodeName === 'li'){
    //...
  }
});







