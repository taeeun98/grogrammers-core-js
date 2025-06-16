/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


const nav = getNode('nav');

nav.className
nav.className = 'nav';
nav.classList.add('hello');
nav.classList.remove('hello');
nav.classList.toggle('isActive');



//JS Doc  /** 치면 됨

// addClass('.first', 'tiger')
// addClass('.first', 'a,b,c')
// addClass('.first', ['a', 'b', 'c'])
// addClass('.first', {first:'a', second:'b'});

// removeClass('.first', 'hello')
// removeClass('.first', '') // 모든 클래스 다 지우기

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`