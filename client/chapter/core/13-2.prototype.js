/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

 
class Animal {
    legs = 4;
    tail = true;
    #nickName = 'tiger';
    // 비공개(private) 필드 선언
    // # = 외부에서 접근할 수 없는 클래스 내부 전용 변수
    
    //최초 1회만 실행
    constructor(name){
        this.name = name;
        this.stomach = [];
    }

    get eat() {
        return this.stomach;
    }

    set eat(food) {
        this.stomach.push(food);
        console.log(`${this.#nickName}이 맛있게 밥을 먹습니다다`);
        
    }
}

const animal = new Animal('몽실이');


function Tiger(name) {
    Animal.call(this); // Animal 생성자 호출 (상속)
    this.name = name;
    this.pattern = '호랑이무늬';

    // 인스턴스 메서드드
    this.hunt = function (target) {
        this.prey = target;
        return `${target}에게 조용히 접근한다.`;
    };
}

// Tiger.prototype = _animal;

const _tiger = new Tiger('호돌이');

// 스태틱 메서드드
Tiger.bark = function (sound) {
    return sound;
};


class Tigers extends Animal{
    constructor(name){
        super(name); //  확장했을때 부모의 contructor 상속하려면 super 써야함
        this.pattern = '호랑이무늬';
    }

    hunt(targer) {
        this.prey = targer;
        return `${targer}에게 조용히 접근한다`
    }

    static bark(sound){
        return sound + "펑";
    }
}

const tigers = new Tigers('호돌이');



class Button {

    constructor(selector, content) {
        this.button = document.querySelector(selector);
        this.button.textContent = content;
        this.attachEvent();
    }

    createTag() {
        return  `<div>clicked</div>`
    }

    #render(){
        document.body.insertAdjacentHTML('beforeed', this.createTag());
    }


    handleClick(){
        // this.#render();
        console.log(this);
        
    }

    attachEvent() {
        // this.button.addEventListener('click', this.handleClick); // 이렇게 하면 handleClick 의 this 가 버튼 html 엘리먼트가 됨됨
        // this.button.addEventListener('click', () => this.handleClick());
        this.button.addEventListener('click', this.handleClick.bind(this)); // 그래서 btn인스턴스의 this 를 인자로 보내면 handleClick에서도 인스턴스 접근 가능
    }
}

const btn = new Button('.btn', 'click me!');





class Button2 {

    constructor({target, content}) {
        this.button = document.querySelector(target);
        this.button.textContent = content;
        this.attachEvent();
    }

    createTag() {
        return  `<div>clicked</div>`
    }

    #render(){
        document.body.insertAdjacentHTML('beforeed', this.createTag());
    }


    handleClick(){
        // this.#render();
        console.log(this);
        
    }

    attachEvent() {
        // this.button.addEventListener('click', this.handleClick); // 이렇게 하면 handleClick 의 this 가 버튼 html 엘리먼트가 됨됨
        // this.button.addEventListener('click', () => this.handleClick());
        this.button.addEventListener('click', this.handleClick.bind(this)); // 그래서 btn인스턴스의 this 를 인자로 보내면 handleClick에서도 인스턴스 접근 가능
    }
}

const btn2 = new Button2({
    target: '.btn',
    content: 'click me'
})





class User {
  #pw;

  constructor(id, pw) {
    this.id = id;
    this.#pw = pw;
  }

  hashPassword(pw) {
    this.#pw = `hashCODE ${pw} 소금 후추`;
    return this.#pw;
  }

  checkPassword(pw) {
    this.#pw === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'hello123');


class Admin extends User {
    constructor(id, pw){
        super(id, pw);
        this.role = 'admin';
    }


    isAdmin() {
        return true;
    }


    banUser(user){
        console.log(`${user.id} 가 ${this.id} 에 의해 밴당했어요`);
        
        user.inBanned = true;
    }
}

const admin = new Admin('admin', 'admin');

let guestCount = 1;



class Guest extends User {
    constructor() {
        const guestId = `guest_${++guestCount}`;
        super(guestId, null);
        this.role = 'guest';
    }

    isGuest() {
        return true;
    }

    checkPw() {
        return false;
    }
}