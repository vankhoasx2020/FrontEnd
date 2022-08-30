var btnOpen = document.querySelector('.search__btn')
var boxOpen = document.querySelector('.search__box')
// var btnClose = document.querySelector('.search__')

function toggleInput() {
    search__box.classList.toggle('search__open');
}

btnOpen.addEventListener('click', function() {
    this.parentElement.classList.toggle('search__open')
    this.previousElementSibling.focus();
})





// var images = document.querySelectorAll('.image img')
// var left = document.querySelector('.left')
// var right = document.querySelector('.right')
// var close = document.querySelector('.close')
// var galleryImg = document.querySelector('.gallery__inner img')
// var gallery = document.querySelector('.gallery')

// var currentIndex = 0;

// console.log(images)

// function showGallery() {
//     if(currentIndex==0) { 
//         left.classList.add('hide')
//     } else {
//         left.classList.remove('hide')
//     }

//     if(currentIndex==7) { 
//         right.classList.add('hide')
//     } else {
//         right.classList.remove('hide')
//     }
//     galleryImg.src=images[currentIndex].src
//     gallery.classList.add('show')
// }

// images.forEach((item, index) => {
//     item.addEventListener('click', function(){
//         currentIndex = index
//         showGallery()
//     })
// })

// close.addEventListener('click', function() {
//     gallery.classList.remove('show')
// })

// document.addEventListener('keydown',function(e) {
//     if(e.keyCode==27) {
//     gallery.classList.remove('show')
//     }
// })

// left.addEventListener('click', function(){
//     if(currentIndex>0) {
//         currentIndex--
//         showGallery()
//     }
    
// })

// right.addEventListener('click', function(){
//     if(currentIndex<8) {
//         currentIndex++
//         showGallery()
//     }
// })