const section = document.querySelectorAll('section');
const homeImage = document.querySelector('.home img');
window.onscroll = () => {
    if (window.scrollY > 100) {
        homeImage.classList.add('active')
    } else {
        homeImage.classList.remove('active')
    }
    section.forEach (sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation')
        } else {
            sec.classList.remove('start-animation')
        }
        if (top > sec.offsetTop - 200 && top < sec.offsetTop - 500 + height) {
            sec.classList.add('start')
        } else {
            sec.classList.remove('start')
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle("sticky",window.scrollY>100)
}