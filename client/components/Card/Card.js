class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      showImage: this.getAttribute('showImage') || 'true',
      title: this.getAttribute('title') || 'Card title',
    };

    this.render();
  }

  render() {
    const { showImage, title } = this.state;

    const figure = `
        <figure>
            <img src="./assets/visual.png" alt="">
            <figcaption class="ally-hidden">빨간 배경의 딸기</figcaption>
        </figure>
    `;
    
    this.shadowRoot.innerHTML = `
        <style>
            @import url('./components/Card/Card.css');
        </style>
        <div class="card">
        ${showImage === 'true' ? figure : ''}
            
            <h2>${title}</h2>
            <p>
                description...
            </p>
            <button type="button">button</button>
        </div>
        `;
  }
}

customElements.define('c-card', Card);
