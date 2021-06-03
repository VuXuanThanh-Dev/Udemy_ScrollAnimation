
// js

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrollingAnimation);

scrollingAnimation();

function scrollingAnimation(){
    const viewHeight = window.innerHeight / 5 * 3;
    
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;
        if( boxTop < viewHeight) {
            box.classList.add('active');
        }else{
            box.classList.remove('active');
        }
    })
}