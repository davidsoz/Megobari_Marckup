const menuBar = document.querySelector('.menu-bar');
const services = document.querySelector('li');

console.log(services.textContent);

services.addEventListener('click', () => {
    menuBar.classList.toggle('hide');
});

