/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

//이렇게 원본을 훼손하는건 잘 안 씀씀
Object.prototype.nickName = 'tiger';
console.log('nickName' in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의(own) 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// 아래처럼 하면 javaScript 객체 내 hasOwnProperty 메서드가 정의될수도 있어서 비추
// console.log(javaScript.hasOwnProperty('nickName'));
// object 상위 객체의 프로퍼티 빌려쓰기 (call 꼭 쓰기)
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for(const key in javaScript) {
    if (Object.hasOwn(javaScript, key)){
        console.log(key);
    }
}


const tens = [10,100,1000,10_000];
for(const key in tens){
    console.log(tens[key]);
}