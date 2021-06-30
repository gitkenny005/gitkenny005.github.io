const about = document.querySelector('.title');
const aboutOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}
let aboutCallback = (entries) =>{
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add('isAboutVisible')
    }
  });
}


let aboutObserver = new IntersectionObserver(aboutCallback, aboutOptions);
aboutObserver.observe(about);






















// // const content = document.querySelector('.intersect-content');

// // const container = document.querySelector(".box-wrapper");


// // const options = {
// //     root: null,
// //     rootMargin: '0px',
// //     threshold: .25
// // }

// // let callback = (entries, observer) => {
// //     entries.forEach(entry =>{
// //         if(entry.isIntersecting){
// //             entry.target.classList.add('intersect-in-view');
// //         }else{
// //             entry.target.classList.remove('intersect-in-view');
// //         }
// //     });
// // }

// // let observer = new IntersectionObserver(callback, options);
// // observer.observe(content);




// // const boxOptions = {
// //     root: null,
// //     rootMargin: '0px',
// //     threshold: .25
// // }

// // let boxCallback = (entries, boxObserver) => {
// //     entries.forEach(entry =>{
// //         if(entry.isIntersecting){
// //             entry.target.classList.add('fade-left');
// //         }else{
// //             entry.target.classList.remove('fade-left');
// //         }
// //     });
// // }

// // let boxObserver = new IntersectionObserver(boxCallback, boxOptions);
// // boxObserver.observe(container);



// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");



// // hamburger.addEventListener("click", mobileMenu);
// // navLink.forEach(navMenu => navMenu.addEventListener("click", closeMenu));

// // function mobileMenu() {
// //     hamburger.classList.toggle("active");
// //     navMenu.classList.toggle("active");
// // }

// // function closeMenu() {
// //     hamburger.classList.remove("active");
// //     navMenu.classList.remove("active");     
// //     navMenu.classList.replace("disappear");
// // }   

// function mobileMenu(){
//     if(hamburger==="click"){
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//     }
// }
