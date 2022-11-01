const body = document.querySelector('body')

const crearCenizasp = () => {
    let ceniciento = document.createElement('l')
    let x = innerWidth * Math.random()
    let size = (Math.random() * 4) + 2
    let delay = Math.random() * 5
    let anima = (Math.random() * 200) + 5
    let z = Math.round(Math.random()) * 100
    let grado = Math.random() * 90
    let derecha = (innerWidth * Math.random()) * 0.4


    ceniciento.style.left = (x - derecha) + 'px'
    ceniciento.style.width = (size * 2) + 'px'
    ceniciento.style.height = size + 'px'
    ceniciento.style.animationDelay = delay + 's'
    ceniciento.style.animationDuration = anima + 's'
    ceniciento.style.zIndex = z
    ceniciento.style.rotate = grado + 'deg'
    

    body.appendChild(ceniciento)

    setTimeout(() => {
        ceniciento.remove()
    }, anima * 1000)}


setInterval(crearCenizasp, 200)