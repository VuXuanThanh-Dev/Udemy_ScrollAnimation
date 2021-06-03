// js 

const header = document.querySelector('ul');
const heading = document.querySelector('h1');

window.addEventListener('scroll', scrollAnimation);

function scrollAnimation(){
    const topH =  heading.getBoundingClientRect().top;
    if(topH <= 0) {
         header.classList.add('active');
    } else{
        header.classList.remove('active');
    }

}