import { isString } from "../utils/type.js";

const {localStorage:storage} = window;


const obj = {
  name: 'tiger',
  age: 30,
  do() {
    return 'nice';
  }
};

// storage.setItem('user', JSON.stringify(obj));
// console.log(JSON.parse(storage.getItem('user')));


export function setStorage(key, value) {
    return new Promise((resolve, reject)=>{
        if(isString(key)){
            storage.setItem(key, JSON.stringify(value));
            resolve();
        } else {
            reject({message:`setStorage의 첫번째 함수는 문자 타입이어야 합니다`});
        }
    })
}

export function getStorage(key) {
    return new Promise((resolve, reject)=>{
        const value = storage.getItem(key);

        if(value){
            resolve(value);
        }else {
            reject({message:`해당하는 키값이 없습니다`})
        }
    })
}

setStorage('user', obj)
.then(()=>{
    console.log('done');
})



getStorage('user')
.then((res)=>{
    console.log(res);
})


export function deleteStorage(key) {
    return new Promise((resolve, reject)=>{
        !key ? storage.clear() : storage.removeItem(key);
        resolve();
    })
}


