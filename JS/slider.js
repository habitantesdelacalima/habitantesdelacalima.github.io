(function(){

    const sliders = [...document.querySelectorAll('.libros_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentLibros = document.querySelector('.libros_body--show').dataset.id;
        value = Number(currentLibros);
        value+= add;     
        
        sliders[Number(currentLibros)-1].classList.remove('libros_body--show')
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('libros_body--show');

    }    
})();