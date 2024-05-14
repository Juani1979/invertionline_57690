function funcionPrestamo() {
    const prestamo = {
        montoMaximo: 3000000,
        notoMaxError: "3.000.000",
        plazoMaximo: 18,
        tasaNominal: 0.89,
        calcularCuotaMensual: function(monto, plazo) {
            const tasaEfectivaMensual = this.tasaNominal / 12
            return (monto * tasaEfectivaMensual) / (1 - Math.pow((1 + tasaEfectivaMensual), - plazo))
        },
        validarMonto: function(monto) {
            return monto > 0 && !isNaN(monto) && monto <= this.montoMaximo
        },
        validarPlazo: function(plazo) {
            return plazo > 0 && !isNaN(plazo) && plazo <= this.plazoMaximo
        }
    }

    const formulario = document.getElementById('prestamoForm')

    formulario.addEventListener('submit', function(event) {
        event.preventDefault()

        const montoSolicitado = parseInt(formulario.querySelector('#monto').value)
        const plazoMeses = parseInt(formulario.querySelector('#plazo').value)

        if (!prestamo.validarMonto(montoSolicitado)) {
            mostrarAlerta("\nEl Monto ingresado no es válido.\n(Monto Máximo $" + prestamo.notoMaxError + ")")
        } else if (!prestamo.validarPlazo(plazoMeses)) {
            mostrarAlerta("El Plazo en Meses ingresado no es válido.\n(Plazo Máximo " + prestamo.plazoMaximo + " Meses)")
        } else {
            let cuotaMensual = prestamo.calcularCuotaMensual(montoSolicitado, plazoMeses)

            let detalleCuotas = "Monto Solicitado: $" + montoSolicitado.toFixed(2) + "\n" +
                                "Plazo: " + plazoMeses + " Meses\n" +
                                "Tasa Nominal: " + (prestamo.tasaNominal * 100) + "%\n\n" +
                                "Detalle de Cuotas a Pagar:\n\n"

            let saldoRestante = montoSolicitado
            let mes = 1
            const cuotas = []

            while (mes <= plazoMeses && saldoRestante > 0) {
                let interesMensual = saldoRestante * (prestamo.tasaNominal / 12)
                let amortizacion = cuotaMensual - interesMensual

                cuotas.push({
                    numero: mes,
                    cuota: cuotaMensual.toFixed(2),
                    interes: interesMensual.toFixed(2),
                    amortizacion: amortizacion.toFixed(2)
                })

                saldoRestante -= amortizacion
                mes++
            }

            cuotas.forEach(function(cuota) {
                detalleCuotas += `✓ Cuota Nro.` + cuota.numero + `: $` + cuota.cuota + ` (Int. $` + cuota.interes + ` + Cap. $` + cuota.amortizacion + `)\n`
            })
            
            localStorage.setItem('detalleCuotas', detalleCuotas)
            window.location.href = 'prestamos_res.html'
        }
    })
}

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