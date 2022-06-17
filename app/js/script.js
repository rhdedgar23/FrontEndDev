const header= document.querySelector('.header');
const hambugerButton= document.querySelector('#hamburgerButton');
const overlay= document.querySelector('.overlay');
const overlayMenu= document.querySelector('.header__menuWindow');
const body= document.querySelector('body');

hamburgerButton.addEventListener('click', function(){
    
    console.log('click hamburger');
9
    if(header.classList.contains('open')){
        body.classList.remove('noScroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        overlayMenu.classList.remove('fade-in');
        overlayMenu.classList.add('fade-out');
    }
    else{
        body.classList.add('noScroll');
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        overlayMenu.classList.remove('fade-out');
        overlayMenu.classList.add('fade-in');
    }
    //classList lets us manipulate an element's class content attribute
});