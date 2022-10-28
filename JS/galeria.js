const imgBigBox = document.getElementById("img_big_box"),
imgBig = document.getElementById("img_big");



function openFullImg(reference){
    imgBigBox.style.display = "flex";
    imgBig.src = reference;
    
}

function closeImg(){
    imgBigBox.style.display = "none";
}