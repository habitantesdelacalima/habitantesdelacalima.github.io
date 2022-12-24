const imgBigBox = document.getElementById("img_big_box"),
imgBig = document.getElementById('img_big');


function openFullImg(reference){
    imgBigBox.style.display = "flex";
    imgBig.src = reference;
}

function closeImg(){
    imgBigBox.style.display = "none";
}




// const imgBigBox = document.getElementById("img_big_box"),
// imgBig = document.getElementById("img_big");



// function openFullImg(reference){
//     imgBigBox.style.display = "flex";
//     imgBig.src = reference;
    
// }

// function closeImg(){
//     imgBigBox.style.display = "none";
// }


// const fichaBigBox = document.getElementById("ficha_big_box"),
// fichaBig = document.getElementById('ficha_big');

// function openFull(reference){
//     fichaBigBox.style.display = "flex";
//     fichaBig.src = reference;
// }

// function closeFicha(){
//     fichaBigBox.style.display = "none";
// }



// function fichaMostrar(){
//     document.getElementById('ficha_mostrar').style.display = 'none';
//     document.getElementById('ficha_ocultar').style.display = 'block';
//     document.getElementById('fichaT').style.display = 'block';
    
// }

// function fichaOcultar(){
//     document.getElementById('ficha_mostrar').style.display = 'block';
//     document.getElementById('ficha_ocultar').style.display = 'none';
//     document.getElementById('fichaT').style.display = 'none';
// }