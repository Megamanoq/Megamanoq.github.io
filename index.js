let text = document.querySelectorAll('a')
harmburger.onclick = function (event){
    let menu = document.querySelector('aside')
    menu.style.display = 'block'
    menu.style.transition = '2s'
    text.style.visibility = 'visible'



}

back.onclick = function (event){
    let back = document.getElementById('back')
    let menu = document.querySelector('aside')
    menu.style.display = 'none'
    menu.style.transition = '2s'
    text.style.visibility = 'hidden'
}