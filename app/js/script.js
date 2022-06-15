const hamburgerButton= document.querySelector('.header');
const overlay= document.querySelector('.overlay');

hamburgerButton.addEventListener('click', function(){
    
    console.log('click hamburger');

    if(hamburgerButton.classList.contains('open')){
        hamburgerButton.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{
        hamburgerButton.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
    //classList lets us manipulate an element's class content attribute
});