/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
const animal = {
    legs:4,
    tail:true,
    
    get eat() { //getter
        return this.stomach;
    },

    set eat(food){ //setter 
        this.stomach = [];
        this.stomach.push(food);
    }
}


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;       // 먹잇감 저장
    this.eat = this.prey;     // setter 실행 → 먹음
    return `${target}에게 조용히 접근한다.`;  // 텍스트 반환
  },
  __proto__: animal           // animal 객체 상속
};





// 생성자 함수 
function Animal() {
    this.legs = 4;
    this.tail = true;

    this.getEat = function () {
        return this.stomach ?? [];
    };

    this.setEat = function (food) {
        this.stomach = [];
        this.stomach.push(food);
    };
}

const _animal = new Animal();



function Tiger(name) {
    this.name = name;
    this.pattern = '호랑이무늬';
    this.hunt = function (target){
        this.prey = target;
        return `${target}에게 조용히 접근한다.`
    }
}


Tiger.prototype = _animal;

const _tiger = new Tiger('호돌이');




// function instance method
// f.call
// f.apply
// f.bind

function sum(a, b) {
    console.log(this); // 여기서 this 는 window
    return a + b;
}

// Object.prototype.hasOwnProperty.call(obj, key);
console.log(sum(1,2));


const _call = sum.call({}, 10, 20); // 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수를 낱개로 하냐
const _apply = sum.apply({}, [10, 20]); // 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수를 배열로 묶냐
const _bind = sum.bind({}); // 함수 대신 실행x -> 빌려쓰기 -> 따로 실행시켜야함 _bind()
// bind 는 언제 쓰냐? addEventListener ('click', clickEvent.bind({}));
// 이런식으로 바로 함수 실행이 되면 안될떄, 특정 조건일때만 실행되어야 할때 사용

