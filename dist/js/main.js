// burger 

const burger = document.querySelector('.burger');
burger.addEventListener('click', function (e) {
  e.preventDefault;
  burger.classList.toggle('active');
});