const hamburer = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburer.addEventListener('click', ()=>{
  navList.classList.toggle('open')
})