/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// arguments 는 일반함수와 함수표현식까지에만 쓸수잇고 화살표함수에선 못씀
// 대신 ...rest = rest 파라미터 를 제공
// spread syntax [...arr] 과 헷갈림 주의
// let calcAllMoney = (a, ...rest) => {

//     console.log(a); //뽑을거 뽑고
//     console.log(rest); // 남은걸 배열로 만들어줌 args 등 뭘로 써도됨
    
// };

// calcAllMoney(100, 300, 500, 1000);

let calcAllMoney = (...args) => {
    let total = 0;

    // for문
    // for(const value of args){
    //     total += value;
    // }

    // forEach 문
    args.forEach(function(item){
        total += item;
    });

    // forEach 화살표함수
    args.forEach((item, index) => {
        total += item;
    });


    // reduce문
    total = args.reduce(function(acc, cur){
        return acc + cur;
    });

    // reduce 화살표함수
    total = args.reduce((acc, cur)=>{
        return acc + cur
    }, 0);

    /*  기본 구조조
        arr.reduce((누적값, 현재값, 인덱스, 배열) => {
            return 누적값;
        }, 초기값);
    */


    return total;

};


let _calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);


calcAllMoney(100, 300, 500, 1000);



const user = {
    name: '박수진',
    total: 0,
    grades: [50, 70, 40],
    sayHi:function() {
        console.log(this); //this = user, constructor 존재
        // = 생성자 함수로서 역할도 수행할수있음, new 붙여서 호출가능
    },
    sayHi2:()=>{
        console.log(this); //this = window, constructor 존재 X
    },
    sayHi3() {
        console.log(this); //this = user, constructor 존재 X
        
    },
    totalGrades() {
        this.grades.forEach(function(g){
            this.total += g;
        })
    }
}


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = ((numeric, powerCount) => {

    let total = 1;

    for(let i=0; i<powerCount; i++) {
        total = total * numeric;
    }

    return numeric;
}); 

pow(2,53);


let _pow = ((numeric, powerCount) =>{
    return Array(powerCount).fill(null).reduce((acc, cur) => {
        return acc * numeric;
    }, 1);
});




// repeat(text: string, repeatCount: number): string;
let repeat = ((text, repeatCount)=>{
    let totalText = "";


    for(let i = 0; i<repeatCount; i++){
        totalText += text;
    }

    return totalText;
});



let _repeat = (text, repeatCount) => {
    Array(repeatCount).fill(null).reduce(acc => acc + text, '')
}


console.log(repeat('hello', 3));