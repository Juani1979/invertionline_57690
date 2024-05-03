function funcionPlazoFijo() {
    const tasas = [
        { rango: [30, 59], tasa: 0.4 },
        { rango: [60, 89], tasa: 0.35 },
        { rango: [90, 365], tasa: 0.25 }
    ];

    function obtenerTasaMensual(plazoDias) {
        for (const tasa of tasas) {
            if (plazoDias >= tasa.rango[0] && plazoDias <= tasa.rango[1]) {
                return tasa.tasa;
            }
        }
        return null; // Si no se encuentra una tasa para el plazo dado
    }

    function calcularIntereses(capital, tasaMensual, plazoDias) {
        const diasAnio = 365;
        return (capital * tasaMensual) * (plazoDias / diasAnio);
    }

    const plazoDias = parseInt(prompt("Plazo (en días):"));
    const capital = parseInt(prompt("Capital a Invertir:"));

    if (isNaN(plazoDias) || isNaN(capital) || plazoDias <= 0 || capital <= 0) {
        alert("Por favor, ingrese valores válidos para calcular su Plazo Fijo.");
    } else {
        if (plazoDias >= 30 && plazoDias <= 365) {
            const tasaMensual = obtenerTasaMensual(plazoDias);
            if (tasaMensual !== null) {
                const interesGanado = calcularIntereses(capital, tasaMensual, plazoDias);
                const montoTotal = capital + interesGanado;
                const tasaPlazoFijo = tasaMensual * 100;

                // Redirigir a plazo_fijo_res.html con los resultados en la URL
                window.location.href = "plazo_fijo_res.html?plazoDias=" + plazoDias +
                                        "&capital=" + capital +
                                        "&interesesGanados=" + interesGanado.toFixed(2) +
                                        "&montoTotal=" + montoTotal.toFixed(2) +
                                        "&tasaMensual=" + tasaPlazoFijo.toFixed(0);
            } else {
                alert("No se encontró una tasa para el plazo ingresado.");
            }
        } else {
            alert("El plazo ingresado debe ser mayor o igual a 30 días y menor o igual a 365 días.");
        }
    }
}



/*Funcion Vieja */
/*function funcionPlazoFijo() {
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
                    tasaMensual = 40/100
                    break;
                case plazoDias >= 60 && plazoDias <= 89:
                    tasaMensual = 35/100
                    break;
                case plazoDias >= 90 && plazoDias <= 365:
                    tasaMensual = 25/100
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
}*/

function funcionTasas() {
    // Mostrar Tasas
    let mensaje = "Tasas de Interés Aplicadas \n\n" +
                  "De 30 a 59 días: 40% \n" +
                  "De 60 a 89 días: 35% \n" +
                  "De 90 a 365 días: 25%"
    alert(mensaje)
}