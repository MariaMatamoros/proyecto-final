//comment 

function toggleSection() {
    const contenedor = document.getElementById("masTexto");
    if (!contenedor.style.display || contenedor.style.display === "none") {
        contenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Leer Menos";
    } else {
        contenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Leer Más";
    }
}

function toggleCategory(category) {
     var category1Element = document.getElementById("category1");
     var category2Element = document.getElementById("category2");
     var category3Element = document.getElementById("category3");
    
     if (category === 'cate1'){
        category1Element.style.display = "block";
        category2Element.style.display = "none";
        category3Element.style.display = "none";
     } else if (category === 'cate2'){
        category1Element.style.display = "none";
        category2Element.style.display = "block";
        category3Element.style.display = "none";
     } else {
        category1Element.style.display = "none";
        category2Element.style.display = "none";
        category3Element.style.display = "block";
     }
}



