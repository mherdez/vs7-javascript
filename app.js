

const cuadradoHTML = document.querySelector('.cuadrado');
const btnRojo  = document.querySelectorAll('.btn')[0]
const btnVerde = document.querySelectorAll('.btn')[1]
const btnAzul  = document.querySelectorAll('.btn')[2]

btnRojo.addEventListener('click', () => {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado')
   cuadradoHTML.classList.add('rojo')
   document.querySelector('h1').innerText = 'CUADRADO ROJO'
})
btnVerde.addEventListener('click', () => {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado')
   cuadradoHTML.classList.add('verde')
   document.querySelector('h1').innerText = 'CUADRADO VERDE'
   
})
btnAzul.addEventListener('click', () => {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado')
   cuadradoHTML.classList.add('azul')
   document.querySelector('h1').innerText = 'CUADRADO AZUL'
})

cuadradoHTML.addEventListener('click', () => {
   cuadradoHTML.classList = ''
   cuadradoHTML.classList.add('cuadrado')
   document.querySelector('h1').innerText = 'Demo del DOM en Javascript'
})
