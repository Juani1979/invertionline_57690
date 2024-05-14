// Tasas Vigentes - Buscar y Filtrar
let tasas = [
    { rango: "de 30 a 59 días", tasa: 0.40 },
    { rango: "de 60 a 89 días", tasa: 0.35 },
    { rango: "de 90 a 365 días", tasa: 0.25 }
];

// Calcular Tasa de Interés de los días ingresados
function calcularTasa(event) {
    event.preventDefault()

    let dias = parseInt(document.getElementById('dias').value)

    // Validar Datos
    if (dias >= 30 && dias <= 365) {
        // Buscar la tasa correspondiente al rango de días
        let tasaObj = tasas.find(tasa => {
            let regex = /de (\d+) a (\d+) días/
            let matches = tasa.rango.match(regex)
            let min = parseInt(matches[1])
            let max = parseInt(matches[2])
            return dias >= min && dias <= max
        })

        if (tasaObj) {
            // Mensaje del Resultado
            let mensaje = `Para un plazo de ${dias} días, tu tasa de interés será del ${tasaObj.tasa * 100}%.`

            // Mostrar Mensaje
            let customAlertMessageTasa = document.getElementById('customAlertMessageTasa')
            customAlertMessageTasa.textContent = mensaje

            document.getElementById('customAlertTasa').style.display = 'block'
        } else {
            // Mostrar Mensaje Error
            let customAlertMessage = document.getElementById('customAlertMessage')
            customAlertMessage.textContent = "No se encontró una tasa para el rango de días ingresado."

            document.getElementById('customAlert').style.display = 'block'
        }
    } else {
        // Mostrar Mensaje Error
        let customAlertMessage = document.getElementById('customAlertMessage')
        customAlertMessage.textContent = "Por favor ingresá una cantidad de días válida (entre 30 y 365 días)."

        document.getElementById('customAlert').style.display = 'block'
    }
}

// Asociar la función de cálculo al formulario
document.getElementById('formTasas').addEventListener('submit', calcularTasa)

// Cerrar Ventanas
document.getElementById('customAlertClose').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'none'
})

document.getElementById('customAlertCloseTasa').addEventListener('click', function() {
    document.getElementById('customAlertTasa').style.display = 'none'
})

// Función para mostrar TODAS las tasas
function mostrarTasasVigentes() {
    let contenido = '<p class="pTitTasas">Tasas Vigentes</p>'

    // Recorrer Tasas y agregar al contenido
    tasas.forEach(tasa => {
        contenido += `<p class="pTasas">${tasa.rango}: ${tasa.tasa * 100}%</p>`
    })

    // Mostrar Contenido
    let customAlertMessageTVigente = document.getElementById('customAlertMessageTVigente')
    customAlertMessageTVigente.innerHTML = contenido

    document.getElementById('customAlertTVigente').style.display = 'block'
}

// Asociar la función mostrarTasasVigentes click btnTasas
document.getElementById('btnTasas').addEventListener('click', mostrarTasasVigentes)

// Cerrar la ventana
document.getElementById('customAlertCloseTVigente').addEventListener('click', function() {
    document.getElementById('customAlertTVigente').style.display = 'none'
})