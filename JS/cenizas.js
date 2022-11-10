const body = document.querySelector('body');

const crearCenizas = () => {
    let pavesa = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 4);
    let delay = Math.random() * 5;
    let anima = (Math.random() * 200) + 5;
    let z = Math.round(Math.random()) * 100;
    let grado = Math.random() * 90;
    let derecha = (innerWidth * Math.random()) * 0.4;


    pavesa.style.left = (x - derecha) + 'px';
    pavesa.style.width = (size * 2) + 'px';
    pavesa.style.height = size + 'px';
    pavesa.style.animationDelay = delay + 's';
    pavesa.style.animationDuration = anima + 's';
    pavesa.style.zIndex = z;
    pavesa.style.rotate = grado + 'deg';
    

    body.appendChild(pavesa);

    setTimeout(() => {
        pavesa.remove()
    }, anima * 1000)};


setInterval(crearCenizas, 200);



const about = document.querySelector('body');

const crearBrasas = () => {
    let brasas = document.createElement('j');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 4) + 2;
    let delay = Math.random() * 5;
    let anima = (Math.random() * 15) ;
    let z = Math.round(Math.random()) * 100;
    let grado = Math.random() * 90;
    let derecha = (innerWidth * Math.random()) * 0.4;


    brasas.style.left = (x - derecha) + 'px';
    brasas.style.width = (size * 2) + 'px';
    brasas.style.height = size + 'px';
    brasas.style.animationDelay = delay + 's';
    brasas.style.animationDuration = anima + 's';
    brasas.style.zIndex = z;
    brasas.style.rotate = grado + 'deg';
    

    body.appendChild(brasas);

    setTimeout(() => {
        brasas.remove()
    }, anima * 1000)};


setInterval(crearBrasas, 200);