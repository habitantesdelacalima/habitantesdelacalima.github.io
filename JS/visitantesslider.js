(function(){

    const sliders = [...document.querySelectorAll('.visitantes_body')];
    const buttonNext = document.querySelector('#next1');
    const buttonBefore = document.querySelector('#before1');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentVisitantes = document.querySelector('.visitantes_body--show').dataset.id;
        value = Number(currentVisitantes);
        value+= add;     
        
        sliders[Number(currentVisitantes)-1].classList.remove('visitantes_body--show')
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('visitantes_body--show');

    }    
})();