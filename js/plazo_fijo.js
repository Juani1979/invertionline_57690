function funcionPlazoFijo() {
    const tasas = [
        { rango: [30, 59], tasa: 0.4 },
        { rango: [60, 89], tasa: 0.35 },
        { rango: [90, 365], tasa: 0.25 }
    ]

    function obtenerTasaMensual(plazoDias) {
        for (const tasa of tasas) {
            if (plazoDias >= tasa.rango[0] && plazoDias <= tasa.rango[1]) {
                return tasa.tasa
            }
        }
        return null
    }

    function calcularIntereses(capital, tasaMensual, plazoDias) {
        const diasAnio = 365
        return (capital * tasaMensual) * (plazoDias / diasAnio)
    }

    const plazoDias = parseInt(document.getElementById("plazoDias").value)
    const capital = parseInt(document.getElementById("capital").value)

    if (isNaN(plazoDias) || isNaN(capital) || plazoDias <= 0 || capital <= 0) {
        mostrarAlerta("Por favor, ingresá valores válidos para calcular tu Plazo Fijo.")
    } else {
        if (plazoDias >= 30 && plazoDias <= 365) {
            const tasaMensual = obtenerTasaMensual(plazoDias)
            if (tasaMensual !== null) {
                const interesGanado = calcularIntereses(capital, tasaMensual, plazoDias)
                const montoTotal = capital + interesGanado
                const tasaPlazoFijo = tasaMensual * 100

                // Redirigir a plazo_fijo_res.html con los resultados en la URL
                window.location.href = "plazo_fijo_res.html?plazoDias=" + plazoDias +
                    "&capital=" + capital +
                    "&interesesGanados=" + interesGanado.toFixed(2) +
                    "&montoTotal=" + montoTotal.toFixed(2) +
                    "&tasaMensual=" + tasaPlazoFijo.toFixed(0)
            } else {
                mostrarAlerta("No se encontró una tasa para el plazo ingresado.")
            }
        } else {
            mostrarAlerta("El plazo ingresado debe ser mayor o igual a 30 días y menor o igual a 365 días.")
        }
    }
}

document.getElementById("plazoFijoForm").addEventListener("submit", function(event) {
    event.preventDefault()
    funcionPlazoFijo()
})

function mostrarAlerta(mensaje) {
    const customAlert = document.getElementById("customAlert")
    const customAlertMessage = document.getElementById("customAlertMessage")
    const customAlertClose = document.getElementById("customAlertClose")

    customAlertMessage.textContent = mensaje
    customAlert.style.display = "block"

    customAlertClose.addEventListener("click", function() {
        customAlert.style.display = "none"
    })
}