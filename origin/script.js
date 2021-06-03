
// js

const boxes = document.querySelectorAll('.box');
const heading = document.querySelector('h1');

window.addEventListener('scroll', scrollAnimation);

scrollAnimation();

function scrollAnimation(){
    let viewheight = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if( boxTop < viewheight) {
            box.classList.add('active');
        }else {
            box.classList.remove('active');
        }
    }); 
}