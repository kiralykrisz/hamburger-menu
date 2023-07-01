const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

menu.addEventListener('click', function (event){
    nav.classList.toggle('menu-active')
})

