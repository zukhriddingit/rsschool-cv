const nav_burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('a');

nav_burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    nav_burger.classList.toggle('burger--active');
    navigation.classList.toggle('nav--visible');
});

navLinks.forEach(el => {
    el.addEventListener('click', () =>{
        body.classList.remove('stop-scroll');
        nav_burger.classList.remove('burger--active');
        navigation.classList.remove('nav--visible');
    })
})
