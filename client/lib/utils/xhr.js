export const END_POINT = 'http://localhost:3000/posts';

/* 
  [readyState]
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete   성공 | 실패
*/


// callback

function xhr({method='GET',url,success,fail,body, headers={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
}} = {}){
  
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
  Object.entries(headers).forEach(([k, v]) => {
    xhr.setRequestHeader(k, v);
  });
}

  xhr.addEventListener('readystatechange',()=>{

    const {readyState, status, response} = xhr;

    if(readyState === 4){
      
      if(status >= 200 && status < 400){
        
        const data = JSON.parse(response);

        success(data)
        
      }else{
        console.error('데이터 로드 실패!');
        fail({message:'오류가 발생했습니다!'});
      }
    }
  })

  xhr.send(JSON.stringify(body));
}


const obj = {
  name:'tiger',
  age:30,
  email:'tiger@gmail.com'
}

// xhr({
//   method:'POST',
//   url:END_POINT,
//   success: (data)=> console.log(data),
//   fail: ({message})=> { console.log(message)},
//   body:obj,
//   headers:{}
// })

// xhr({
//   method: 'DELETE',
//   url: `${END_POINT}/4`,
//   success: (data) => console.log(data),
//   fail: ({ message }) => console.log(message),
// });


//함수지만, 속성과 메서드를 동적으로 추가할 수 있는 객체이기 때문에
// 동적으로 get post 등 메서드를 생성하며 사용
xhr.get = (url, success, fail) => {
  xhr({ url, success, fail });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail
  });
};

xhr.delete = (url, success, fail) => {
  xhr({ method: 'DELETE', url, success, fail });
};

xhr.put = (url,body,success,fail) => {
  xhr({
    method:'PUT',
    url,
    body,
    success,
    fail
  })
}

xhr.patch = (url,body,success,fail) => {
  xhr({
    method:'PATCH',
    url,
    body,
    success,
    fail
  })
}


// xhr.get(
//   END_POINT,
//   (data) => console.log(data),
//   () => {}
// );





const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export function xhrPromise(options = {}){

  const {method,url,headers,body,errorMessage:message} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')){
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
      xhr.addEventListener('readystatechange',()=>{
      const { readyState, status, response } = xhr;
      if(readyState === 4){
        if(status >= 200 && status < 400){
          resolve(JSON.parse(response));
        }else{
          reject({message});
        }
      }
    })
  })
}


xhrPromise({ url:END_POINT })
.then((res)=>{
  // console.log( res );
})


xhrPromise.get = (url) => xhrPromise({url});
xhrPromise.post = (url,body) => xhrPromise({url,body,method:'POST'});
xhrPromise.put = (url,body) =>  xhrPromise({url,body,method:'PUT'});
xhrPromise.patch = (url,body) =>  xhrPromise({url,body,method:'PATCH'});
xhrPromise.delete = (url) => xhrPromise({url,method:'DELETE'});