'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
    modal.classList.remove('hidden')
overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)

// if (modal.classList.remove('hidden') &&
// overlay.classList.remove('hidden')) {
//     modal.classList.add('hidden')
// overlay.classList.add('hidden')
// }

   
  const closeModal = function() {
    modal.classList.add('hidden')
overlay .classList.add('hidden')
  }

  btnCloseModal.addEventListener( 'click', 
closeModal)
overlay.addEventListener('click', closeModal)

// keyboard event
// keypress keydown and keypress
document.addEventListener('keydown', function(e) {

  
  if (e.key === 'Escape') {
    if(!modal.classList.contains('hidden')) {
        closeModal();
    }
  }
})
 
   