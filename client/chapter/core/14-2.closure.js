const button = document.querySelector('.btn');

const handleClick = () => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
};





// 이벤트 핸들러 함수들은 앞에 핸들이라고 이름 붙여야함
// 근데여기서 () 없이 쓰고싶다면? IFFE 패턴 쓰기
button.addEventListener('click', handleClick());

// 브라우저 성능 때문에 addEventListener 로 붙였으면
// removeEventListener 로 필요없을때 지워줘야함.
// 이것도 클로저
function bindEvent(node, eventType, fn) {
  if (typeof node === 'string') node = document.querySelector(node);

  node.addEventListener(eventType, fn);

  return () => node.removeEventListener(eventType, fn);
}

const remove = bindEvent('.first', 'click', handleClick);
remove();





//class => hook
function useState(init) {
  let value = init;

  function read() {
    //render()
    return value;
  }

  function write(newValue) {
    //render()
    value = newValue;
  }

  return [read, write];
}

const [value, setValue] = useState('hello');

console.log(useState.read);
