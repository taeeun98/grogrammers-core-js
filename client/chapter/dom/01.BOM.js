/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval, console } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

/* 
href : http://localhost:5500/index.html?type=listing&page=2#title
protocol: http: / https:
host: localhost:5500
search: ?type=listing&page=2
hash: #title
*/

const { href, protocol, host, port, search, hash, replace, reload, pathname } = location;

const urlParams = new URLSearchParams(location.search);
// urlParams.get('name'); => 이렇게 파람 꺼내오기



// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;


function getGeolocation(success){
    //서버 통신이기 때문에 js 가 기다려주지않음. 그래서 여기서 result 값을 받아오기 위핸 callback사용해야함
    navigator.geolocation.getCurrentPosition((data) => {

        const {latitude:lat, longitude:long} = data.coords;

        // 콜백함수 success
        success({lat, long});
    });
}

// 추가 로직 하려면 ()=>{} 중첩으로 써야함
getGeolocation((data) => {
    console.log(data);
})


function _getGeolocaiton() {
    const p = new Promise((resolve,reject)=>{

        navigator.geolocation.getCurrentPosition((data) => {

        const {latitude:lat, longitude:long} = data.coords;

        resolve({lat, long});
        })
    })

    return p;
}

//then 으로 추가 로직처리를 할수있는 이점
_getGeolocaiton().then((data)=>{console.log(data)});

// async await 
// const {lat,long} = _getGeolocation();

navigator.mediaDevices.getUserMedia({video:true})
.then((stream)=>{
  console.log( stream );
  document.querySelector('#videoElement').srcObject = stream;
  
})






/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
// spa = single page application 기능


const links = document.querySelectorAll('a');

console.log(links);


function about() {
  return `
    <h1>ABOUT PAGE 입니다!</h1>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias provident expedita aspernatur cupiditate amet repellat magni? Numquam minima exercitationem ratione? Consectetur doloribus incidunt iste nam odio nihil exercitationem eaque magnam.</p>
    </div>
  `;
}



const routes = {
    '/' : '<h1>home page 입니다</h1>',
    '/about' : '<h1>about page 입니다</h1>',
    '/contact' : '<h1>contact page 입니다</h1>'
}

const app = document.querySelector('#app');


links.forEach((a) => {
    a.addEventListener('click', function(e){
        e.preventDefault();
        console.log('click!');

        const href = this.href;
        //history.pushState(stateObj, title, url);
        history.pushState(null, '', href);

        const path = location.pathname;
        app.innerHTML = routes[path] || `<h1>404 not found</h1>`;
        
    })
})

//브라우저 뒤로 가기 / 앞으로 가기 버튼을 눌렀을 때 발생하는 이벤트
//event.state: 이전에 pushState()나 replaceState()에 저장한 객체가 넘어옴
window.addEventListener('popstate',(e)=>{
    console.log( e.state );
})