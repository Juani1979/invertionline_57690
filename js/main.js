document.addEventListener("DOMContentLoaded", function() {
    let contenido = document.querySelector('.contenidoEfecto')
    contenido.classList.add('mostrar')
})

let promociones = ["¡Promoción 1!", "¡Promoción 2!", "¡Promoción 3!"]
let indicePromo = 0
function cambiarPromocion() {
    let promoElement = document.getElementById("promo" + (indicePromo + 1))
    promoElement.style.display = "block"
    
    for (let i = 0; i < promociones.length; i++) {
        if (i !== indicePromo) {
            document.getElementById("promo" + (i + 1)).style.display = "none"
        }
    }
    indicePromo++
    if (indicePromo >= promociones.length) {
        indicePromo = 0
    }
}
 
window.onload = function() {
    let promocionElements = document.querySelectorAll(".promocion")
    for (let i = 0; i < promocionElements.length; i++) {
        promocionElements[i].style.display = "none"
    }
    setTimeout(function() {
        cambiarPromocion()
        setInterval(cambiarPromocion, 7000)
    }, 1000)
}