
var prueba = document.getElementById('prueba'),
    boton = document.getElementById('boton'),
    botoni = document.getElementById('botoni'),
    botonc = document.getElementById('botonc'),
    hojita = document.getElementById('hojita'),
    fueguito = document.getElementById('fueguito'),
    nubecita = document.getElementById('nubecita'),
    contador=0;


    function estacion(){
        if (contadors==0){
            prueba.classList.add(hojita);
            contador==1;
        }
        else {prueba.classList.remove(hojita);
            contador==0;
        }
        
    }




    // function estacion (){   
    //     if (contador==0)
    //         {
    //             prueba.classList.remove(nubecita);
    //             prueba.classList.add(hojita);
    //             contador=1;
    //         }
    //     if (contador==2) {
    //             prueba.classList.remove(hojita);
    //             prueba.classList.add(fueguito);
    //             contador=2;
    //     }
    //     else {prueba.classList.remove(fueguito);
    //             prueba.classList.add(nubecita);
    //             contador=0}
    // }

    habita.addEventListener('click',estacion,true)

    



