
const links = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const depthList = document.querySelectorAll('.depth');

const h = t => t.style.height = 0;

links.forEach((a) => {
  a.addEventListener('mouseenter', (e) => {
    const currentDepth = e.currentTarget.lastElementChild;

    // 모든 depth 높이 없애!
    depthList.forEach(h);

    currentDepth.style.height = '100px';
  });
});

// header.addEventListener('mouseleave', () => {
//   depthList.forEach((d) => {
//     d.style.height = 0;
//     h(d)
//   })
// })
function valia() {
    header.addEventListener('mouseleave', () => depthList.forEach(h));
}


//gsap
console.log(gsap);

links.forEach((a)=>{
    const currentDepth = a.lastElementChild;
    const t1 = gsap.timeline().to(currentDepth, {height:100, duration:0.2, ease:'power2.inOut'});
    a.addEventListener('mouseenter', ()=>{t1.play()})
    a.addEventListener('mouseleave', ()=>{t1.reverse()})
})



// const t1 = gsap.timeline({
//     default:{
//         // duration:5,
//     }
// });

// t1.to('.logo',{
//     x:100,
// })

// t1.to('.logo',{
//     y:100
// })