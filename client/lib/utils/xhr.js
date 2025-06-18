const END_POINT = 'https://jsonplaceholder.typicode.com/users';

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

xhr({
  method:'POST',
  url:END_POINT,
  success: (data)=> console.log(data),
  fail: ({message})=> { console.log(message)},
  body:obj,
  headers:{}
})

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


xhr.get(
  END_POINT,
  (data) => console.log(data),
  () => {}
);