document.addEventListener("DOMContentLoaded", function(event) {
  //global constant part
  const wrapper = document.querySelector('.wrapper');

 /////////////////////////////// MODAL CODE /////////////// 
 const modalBtn = document.querySelectorAll('[data-modal]');
 console.log(modalBtn);
 const modal = document.createElement('div');
    modal.classList.add('modal');
    wrapper.append(modal);
    modal.innerHTML = `
         <div class="modal__window">
           <div class="modal__header">
           <h2 class="modal__title">
             Оставте свои данные и мы свяжемся с Вами
           </h2>
           <span data-modal="close" id="close">&times;</span>
           </div>
           <form action="post" class="modal__form">
               <input type="text" class="modal__name" placeholder="Ваше имя">
               <input type="text" class="modal__telephone" placeholder="Ваш номер телефона">
               <input type="text" class="modal__email" placeholder="Ваша електронная почта">
               <button class="modal__submit mainColor-button">Отправить</button>
           </form>
          </div>
      `;
  function openModal(){
    modal.classList.add('active');
  }   
  function closeModal(){
    modal.classList.remove('active');
  } 
  
  wrapper.addEventListener('click', event => {
    const target = event.target;

    if(target && target.classList.contains('modal')){
      closeModal();
    }

    if(target.hasAttribute('data-modal')){
      modalBtn.forEach(item =>{
        if(target.getAttribute('data-modal') == 'open'){
          openModal();
        }
        if(target.getAttribute('data-modal') == 'close'){
          closeModal();
        }
      });
    }
  });
////////////////////////////////////////////////////////////////////////////////////////////////////

});




  // //burger
  // const burger = document.querySelector('.burger');
  // burger.addEventListener('click', function (e) {
  //   e.preventDefault;
  //   burger.classList.toggle('active');
  // });
