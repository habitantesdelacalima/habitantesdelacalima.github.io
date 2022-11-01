const about = document.querySelector('body')

const crearCenizaskl = () => {
    let pavesakl = document.createElement('j')
    let x = innerWidth * Math.random()
    let size = (Math.random() * 4) + 2
    let delay = Math.random() * 5
    let anima = (Math.random() * 15) 
    let z = Math.round(Math.random()) * 100
    let grado = Math.random() * 90
    let derecha = (innerWidth * Math.random()) * 0.4


    pavesakl.style.left = (x - derecha) + 'px'
    pavesakl.style.width = (size * 2) + 'px'
    pavesakl.style.height = size + 'px'
    pavesakl.style.animationDelay = delay + 's'
    pavesakl.style.animationDuration = anima + 's'
    pavesakl.style.zIndex = z
    pavesakl.style.rotate = grado + 'deg'
    

    body.appendChild(pavesakl)

    setTimeout(() => {
        pavesakl.remove()
    }, anima * 1000)}


setInterval(crearCenizaskl, 200)