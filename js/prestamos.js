function funcionPrestamo() {
    // Ingreso de Datos
    let montoSolicitado = parseInt(prompt("Ingrese el Monto a solicitar en Pesos (Máximo $3.000.000)"))
    let plazoMeses = parseInt(prompt("Ingrese el Plazo en Meses (Máximo 18)"))

    // Validar datos ingresados
    if (montoSolicitado <= 0 || isNaN(montoSolicitado) || montoSolicitado > 3000000) {
        alert("El Monto ingresado no es válido.\n(Monto Máximo $3.000.000)")
    } else if (plazoMeses <= 0 || isNaN(plazoMeses) || plazoMeses > 18) {
        alert("El Plazo en Meses ingresado no es válido.\n(Plazo Máximo 18 Meses)")
    } else {
        // Calcular Tasa y Total a Pagar
        const tasaNominal = 0.89
        const tasaEfectivaMensual = tasaNominal/12

        // Calcular Cuota Mensual
        let cuotaMensual = (montoSolicitado * tasaEfectivaMensual) / (1 - (1 / ((1 + tasaEfectivaMensual) ** plazoMeses)))

        // Mostrar Resultados
        let detalleCuotas = "Monto Solicitado: $" + montoSolicitado.toFixed(2) + "\n" +
                            "Plazo: " + plazoMeses + " Meses\n" +
                            "Tasa Nominal: " + (tasaNominal * 100) + "%\n\n" +
                            "Detalle de Cuotas a Pagar:\n"

        let saldoRestante = montoSolicitado
        let mes = 1

        while (mes <= plazoMeses && saldoRestante > 0) {
            let interesMensual = saldoRestante * tasaEfectivaMensual
            let amortizacion = cuotaMensual - interesMensual

            detalleCuotas += "Cuota Nro. " + mes + ": $" + cuotaMensual.toFixed(2) + "      (Int. $" + interesMensual.toFixed(2) + " + Cap. $" + amortizacion.toFixed(2) + ")\n"
            saldoRestante -= amortizacion
            mes++
        }

        alert(detalleCuotas)
    }
}