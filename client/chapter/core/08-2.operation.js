/* ------------------- */
/* Comparison Operator */
/* ------------------- */

// const number = [10, '10', 6, 101, 10_000]; //1000 자리마다 , 대신 _ 찍을수있음


// // ~ 보다 큼 또는 작음 → boolean
// let lessThen = number[0] < number[3];
// console.log(lessThen);


// let greaterThen = number[0] > number[2];
// console.log(greaterThen);


// // ~ 보다 크거나 작음 또는 같음 → boolean
// let lessThenAndEqual = number[3] >= number[4];
// console.log(lessThenAndEqual);


// let greaterThenAndEqual = number[3] <= number[4];
// console.log(greaterThenAndEqual);


// // 동등(등급이나 정도가 같다) → boolean
// let equal = number[0] == number[1];
// console.log(equal);


// // 다름(같지 않음) → boolean
// let unequal = number[0] != number[1]; 
// console.log(unequal);


// // 동일(똑같다) → boolean
// let same = number[0] === number[1];
// console.log(same);




// 문자 비교
// 사전편집(lexicographical) 순
// 사전 뒤쪽의 문자가 앞쪽의 문자보다 크다고 판단
// 예) 'ㅎ' > 'ㄱ' → true
// 소문자가 대문자보다 크다고 판단
// 예) 'A' > 'a' → false


// 문자 비교 알고리즘(문제 해결을 위한 절차)
// 1. 두 문자열의 첫 글자 비교
// 2. 첫 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 3. 첫 글자가 같을 경우, 두 번째 글자 비교
// 4. 두 번째 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 5. 두 번째 글자가 같을 경우, 두 번째 글자 비교
// 6. ...
// 7. 비교가 종료되었고, 문자열 길이도 같을 경우 두 문자열은 동일함으로 결론 도출

// console.log('Design' <= 'Development');
// console.log('디자인' <= '개발');


/* 여기 이상한 치과가 있습니다.
매 짝수번째 방문시 마다 진료금액의 
10%를 할인해 주는데요
철수가 'arr2의 길이' 만큼 방문했을때
철수가 낸 총 금액의 합은 얼마인가요?

=> arr[0] 가 첫방문이라는 점이 유의할 점인듯 쉬우면서도 약간 꼬아서 재밌음
*/

// function solution (arr) {
//     let total = 0;

//     for(let i = 0; i< arr.length; i++){
        
//         if(i % 2 != 0){
//             total += arr[i] * 0.9;
//         } else {
//             total += arr[i];
//         }

//         console.log("total= " + total);
//     }

//     return total;
// };

// console.log(solution([50000,40000,24000,56000]));



/* 
문자열 `my_string` 이 매개변수로 주어집니다.
`my_string`안의 홀수 인덱스 위치에 있는 숫자들의 합이 짝수인지
여부를 return하도록 solution 함수를 완성해주세요.

isNaN 사용하는 예제라서 좋았음
*/


// function solution(my_string) {
//     let total = 0;

//     for(let i = 0; i < my_string.length; i++) {
//         if(i % 2 != 0 && !isNaN(Number(my_string[i]))){
//             total += Number(my_string[i]);
//         }
//     }

//     console.log("total = " + total)
//     return total % 2 == 0 ? true : false;
// }


// console.log(solution("a7fsdf1ge6we54tsdf6546we8f654"));
// console.log(solution("25s4we325e5w6c1d0wa698d1"));
// console.log(solution("0wd5f900fse5s4e8y6h4op"));


/* 
문자열 `my_string` 이 매개변수로 주어집니다.
my_string안의 홀수 인덱스 위치에 있는 숫자들 중,
짝수인 숫자들의 개수를 return하도록 solution 함수를 완성해주세요.

위에거보단 쉬움 무난
*/

// function solution(my_string) {
//     let count = 0;

//     for(let i = 1; i < my_string.length; i+=2) {
//         if (my_string[i] % 2 == 0) {
//             count++;
//         }
//     }

//     return count;
// }


// console.log(solution("a7fsdf1ge6we54tsdf6546we8f654"));
// console.log(solution("25s4we325e5w6c1d0wa698d1"));
// console.log(solution("0wd5f900fse5s4e8y6h4op"));


/* N명이 운전면허 필기 시험을 봤습니다.

시험의 합격 기준은 60점 이상입니다.

응시자들의 점수가 담긴 배열 `scores`가 주어질 때,

합격한 사람들의 점수만 골라서 배열로 반환하는 함수를 만들어보세요.


push 메서드 사용하는거 재밌었음
filter()와 if 조건문을 사용하세요.
 */


// function passed(scores) {
//     let newArray = [];

//     for(let i = 0; i < scores.length; i++) {
//         if(60 <= scores[i]){
//             newArray.push(scores[i]);
//         }
//     }

//     return newArray;
// }

function passed(scores) {
    let newArray = scores.filter(num => num >= 60);

    for(let i = 0; i < scores.length; i++) {
        if(60 <= scores[i]){
            newArray.push(scores[i]);
        }
    }

    return newArray;
}

console.log(passed([90, 55, 75, 59, 100]));


/* 당신은 페이지 매니저입니다.
프로젝트를 위해 여러 명의 팀원을 여러 팀으로 나누려고 합니다.
팀원들을  짝지어서 두 팀으로 나누려 합니다.
모든 팀원 수는 짝수이고, 한 팀에는 같은 수의 사람이 있어야 합니다.
당신은 팀원들의 이름이 담긴 배열을 보고, 한 가지 가능한 두 팀 구성을 출력하면 됩니다.

배열 메서드는 사용하지 마세요. (slice, splice, map, filter 등 금지)
*/

const members = ["짱구", "맹구", "철수", "훈이"];


function team(members) {
    


}

console.log(team(members));



/* 
짱구는 초코비를 사러 편의점에 갔습니다.
초코비 한개에 2,500원입니다.
짱구가 가지고 있는 돈 money가 매개변수로 주어질 때,
짱구가 최대로 살 수 있는 초코비 개수와 남는 돈을
순서대로 담은 배열을 return하는 solution 함수를 완성해주세요.
단, 아무것도 살 수 없을 때는 초코비 개수 대신 '돈이 부족합니다.'를 담아주세요.

Math.floor 또는 parseInt() 사용해야하는게 재밌었음. 소수점 유의해야하는 부분
*/



function solution(money) {
    let chocobi = 2500;
    let arr = [];

    
    if(money < chocobi){
        arr.push('돈이 부족합니다.');
    } else {
        arr.push(Math.floor(money / chocobi));
        arr.push(money % chocobi);
    }

    return arr;
}

console.log(solution(5000));
console.log(solution(1000));
console.log(solution(7510));
console.log(solution(6900));
console.log(solution(7000));
