var btnOpen = document.querySelector('.button__open')
var modelBackGround = document.querySelector('.model__background')
var iconClose = document.querySelector('.model__header i')
var btnClose = document.querySelector('.model__footer button')

function toggleModel(e) {
    model.classList.toggle('hide');

   console.log(e.target)
}

btnOpen.addEventListener('click', toggleModel);
iconClose.addEventListener('click', toggleModel);
btnClose.addEventListener('click', toggleModel);
modelBackGround.addEventListener('click', toggleModel);

// model.addEventListener('click',  toggleModel);

// // function(e) {
// //     if(e.target == e.currentTarget) {
// //         toggleModel();
// //     }
// // });f


