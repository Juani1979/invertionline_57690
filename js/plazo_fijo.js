function funcionPlazoFijo() {
    // Cantidad de días
    const diasAnio = 365

    // Ingreso de Datos
    const plazoDias = parseInt(prompt("Plazo (en días):"))
    const capital = parseInt(prompt("Capital a Invertir:"))

    // Validar datos ingresados
    if (isNaN(plazoDias) || isNaN(capital) || plazoDias <= 0 || capital <= 0) {
        alert("Por favor, ingrese valores válidos para calcular su Plazo Fijo.")
    } else {
        if (plazoDias >= 30 && plazoDias <= 365) {
            // Buscar la Tasa Mensual x Rango de Días
            let tasaMensual;
            switch (true) {
                case plazoDias >= 30 && plazoDias <= 59:
                    tasaMensual = 60/100
                    break;
                case plazoDias >= 60 && plazoDias <= 89:
                    tasaMensual = 55/100
                    break;
                case plazoDias >= 90 && plazoDias <= 365:
                    tasaMensual = 45/100
                    break;
            }

            // Calcular Intereses
            let interesGanado = 0
            interesGanado += (capital * tasaMensual) * (plazoDias / diasAnio)
        
            // Calcular Total
            const montoTotal = capital + interesGanado

            // Tasa Mensual Porcentual
            let tasaPlazoFijo = tasaMensual*100

            // Mostrar Resultados
            let mensaje = "Plazo: " + plazoDias + " días\n" +
                        "Tasa Mensual: " + tasaPlazoFijo.toFixed(0) + "%" + "\n\n" +
                        "Capital: $" + capital.toFixed(0) + "\n" +
                        "Intereses Ganados: $" + interesGanado.toFixed(2) + "\n\n" +
                        "Monto Total: $" + montoTotal.toFixed(2)
            alert(mensaje)
        } else {
            alert("El plazo ingresado debe ser mayor o igual a 30 días y menor o igual a 365 días.")
        }
    }
}

function funcionTasas() {
    // Mostrar Tasas
    let mensaje = "Tasas de Interés Aplicadas \n\n" +
                  "De 30 a 59 días: 60% \n" +
                  "De 60 a 89 días: 55% \n" +
                  "De 90 a 365 días: 45%"
    alert(mensaje)
}