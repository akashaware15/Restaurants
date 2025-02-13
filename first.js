let menuIcon = document.querySelector('#menu-icon');
let leftside = document.querySelector('.left-side');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    leftside.classList.toggle('active');
}
