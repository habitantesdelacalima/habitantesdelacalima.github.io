const about = document.querySelector('body')

const crearBrasas = () => {
    let brasas = document.createElement('k')
    let x = innerWidth * Math.random()
    let size = (Math.random() * 4) + 2
    let delay = Math.random() * 1
    let anima = (Math.random() * 15) 
    let z = Math.round(Math.random()) * 100
    let grado = Math.random() * 90
    let derecha = (innerWidth * Math.random()) * 0.4


    brasas.style.left = (x - derecha) + 'px'
    brasas.style.width = (size * 2) + 'px'
    brasas.style.height = size + 'px'
    brasas.style.animationDelay = delay + 's'
    brasas.style.animationDuration = anima + 's'
    brasas.style.zIndex = z
    brasas.style.rotate = grado + 'deg'
    

    body.appendChild(brasas)

    setTimeout(() => {
        brasas.remove()
    }, anima * 1000)}


setInterval(crearBrasas, 200)