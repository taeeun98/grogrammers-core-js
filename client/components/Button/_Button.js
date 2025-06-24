class MyElement extends HTMLElement {
  count = 0;

  constructor() {
    super();
    this.render();
  }

  // 정적이든 동적이든 해당 엘리먼트가 연결되면 호출됨
  connectedCallback() {
    console.log('mount');
  }

  // 엘리먼트가 문서에서 제거될 때 브라우저가 이 메서드를 호출
  disconnectedCallback() {
    console.log('unmount');
  }

  static get observedAttributes() {
    //변경 사항을 모니터링할 속성 이름의 배열
    return ['data-value'];
  }

  // 위에 나열된 속성 중 하나가 수정될 때 호출
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-value') {
      this.render();
    }
    console.log(name, oldValue, newValue);
  }

  handleClick() {
    console.log('clicked');
    this.dataset.value = ++this.count;
  }

  attachEvent() {
    this.addEventListener('click', this.handleClick);
  }

  render() {
    console.log(this);
    this.innerHTML = ++this.count;
  }
}

// 브라우저에게 알려주는 시점
customElements.define('my-element', MyElement);

// const element = document.createElement('my-element');
// document.body.append(element);

class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define('hello-button', HelloButton, { extends: 'button' });
