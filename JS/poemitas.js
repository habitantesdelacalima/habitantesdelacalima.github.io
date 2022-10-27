(function(){
    const titlePoemitas = [...document.querySelectorAll('.poemitas_title')];

    titlePoemitas.forEach(poemitas =>{
        poemitas.addEventListener('click', ()=>{
            let height = 0;
            let answer = poemitas.nextElementSibling;
            let addPadding =  poemitas.parentElement.parentElement;

            addPadding.classList.toggle('poemitas_padding--add');
            poemitas.children[0].classList.toggle('poemitas_arrow--rotate');
            
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
    
})();