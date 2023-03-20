const body = document.querySelector('body');

const crearCenizas = () => {
    let pavesa = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 4);
    let delay = Math.random() * 5;
    let anima = (Math.random() * 200) + 5;
    let z = Math.round(Math.random()) * 100;
    let derecha = (innerWidth * Math.random()) * 0.4;


    pavesa.style.left = (x - derecha) + 'px';
    pavesa.style.width = (size * 2) + 'px';
    pavesa.style.height = size + 'px';
    pavesa.style.animationDelay = delay + 's';
    pavesa.style.animationDuration = anima + 's';
    pavesa.style.zIndex = z;

    

    body.appendChild(pavesa);

    setTimeout(() => {
        pavesa.remove()
    }, anima * 700)};


setInterval(crearCenizas, 200);



const about = document.querySelector('body');

const crearBrasas = () => {
    let brasas = document.createElement('j');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 4) + 2;
    let delay = Math.random() * 5;
    let anima = (Math.random() * 15) ;
    let z = Math.round(Math.random()) * 100;
    let derecha = (innerWidth * Math.random()) * 0.4;


    brasas.style.left = (x - derecha) + 'px';
    brasas.style.width = (size * 2) + 'px';
    brasas.style.height = size + 'px';
    brasas.style.animationDelay = delay + 's';
    brasas.style.animationDuration = anima + 's';
    brasas.style.zIndex = z;
    

    body.appendChild(brasas);

    setTimeout(() => {
        brasas.remove()
    }, anima * 700)};


setInterval(crearBrasas, 500);


const poem = document.querySelector('body');

const crearBrasaskl = () => {
    let brasaskl = document.createElement('k');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 4) + 2;
    let delay = Math.random();
    let anima = (Math.random() * 15) ;
    let z = Math.round(Math.random()) * 100;
    let derecha = (innerWidth * Math.random()) * 0.4;


    brasaskl.style.left = (x - derecha) + 'px';
    brasaskl.style.width = (size * 2) + 'px';
    brasaskl.style.height = size + 'px';
    brasaskl.style.animationDelay = delay + 's';
    brasaskl.style.animationDuration = anima + 's';
    brasaskl.style.zIndex = z;
    

    body.appendChild(brasaskl);

    setTimeout(() => {
        brasaskl.remove()
    }, anima * 100)};


setInterval(crearBrasaskl, 1000);