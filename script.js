//Inicio

//Fim

// Inicio
window.sr = ScrollReveal({reset: true});

sr.reveal('.principal', {
  rotate: {x:0, y:90, z:0},
  duration: 2000
  
})

sr.reveal('.sele', {
  rotate: {x:0, y:90, z:0},
  duration: 2000
  
})

sr.reveal('.projetos', {
  rotate: {x:0, y:90, z:0},
  duration: 2000
  
})

sr.reveal('.tecno', {
  rotate: {x:0, y:90, z:0},
  duration: 2000
  
})

sr.reveal('.contato', {
  rotate: {x:0, y:90, z:0},
  duration: 2000
  
})
//Fim

//Inicio
let btnMenu = document.getElementById('abrir')
let menu = document.getElementById('mobile')
let base = document.getElementById('base')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open')
})

base.addEventListener('click', ()=>{
    menu.classList.remove('open')
})
//Fim