
const menuList = document.querySelectorAll('.nav-item__bar-item')
const menuLanguage = document.querySelector('.js-menu-language')
const openLanguage = document.querySelector('.menu__language')
const numberPerson = document.querySelector('.search__number')
const selectnumber = document.querySelector('.select-number')
const barBtn = document.querySelector('.bars-btn')
const openBar = document.querySelector('.nav-item__bars')
const closeBar = document.querySelector('.nav-item__bar-close')
const overLay = document.querySelector('.mask')


numberPerson.addEventListener('click', function() {
    
        selectnumber.classList.toggle('select-number--opened')
        numberPerson.classList.toggle('search__number--active')  
   
        
})
selectnumber.addEventListener('click', function(e) {
    e.stopPropagation()
})

menuLanguage.onclick = function(e){
    
        openLanguage.classList.toggle('menu__language--opened')
    
    
}

openLanguage.onclick = function(e){
    e.stopPropagation()
    
}

barBtn.addEventListener('click',function() {
    openBar.classList.add('nav-item__bars--open')
    overLay.style.display = "block"
})
closeBar.addEventListener('click',function() {
    openBar.classList.remove('nav-item__bars--open')
    overLay.style.display = "none"
})
openBar.addEventListener('click', function(e) {
    const menuLanguage123 = e.target.closest('.js-menu-language')
    const openLanguage2 = document.querySelector('.menu__language2')
    const openLanguage1 = document.querySelector('.menu__language--opened2')
  
    if(menuLanguage123) {
        
        openLanguage2.classList.add('menu__language--opened2')
    }
    
    if(openLanguage1) {
        openLanguage2.classList.remove('menu__language--opened2')
    }
    
})
overLay.addEventListener('click',function() {
    openBar.classList.remove('nav-item__bars--open')
    overLay.style.display = "none"
})
window.addEventListener('mouseup', function(event) {
    
    if (event.target != openLanguage) {
        openLanguage.classList.remove('menu__language--opened')
    }
    if(event.target != selectnumber) {
        selectnumber.classList.remove('select-number--opened')
        numberPerson.classList.remove('search__number--active')
    }
    
 });
