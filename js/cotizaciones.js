async function obtenerCotizacion() {
    try {
        // Traer la API
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest')
        const data = await response.json()
        
        // Buscar Dolar Oficial
        const oficialBuy = data.oficial.value_buy
        const oficialAvg = data.oficial.value_avg
        const oficialSell = data.oficial.value_sell
        
        // Buscar Dolar Blue
        const blueBuy = data.blue.value_buy
        const blueAvg = data.blue.value_avg
        const blueSell = data.blue.value_sell

        // FEcha
        const hoy = new Date()
        const dia = hoy.getDate().toString().padStart(2, '0')
        const mes = (hoy.getMonth() + 1).toString().padStart(2, '0')
        const año = hoy.getFullYear()
        const fechaHoy = `${dia}/${mes}/${año}`
        
        // Enviar Datos
        document.getElementById('fecha-hoy-oficial').textContent = fechaHoy
        document.getElementById('fecha-hoy-blue').textContent = fechaHoy
        document.getElementById('oficial-buy').textContent = oficialBuy
        document.getElementById('oficial-avg').textContent = oficialAvg
        document.getElementById('oficial-sell').textContent = oficialSell
        document.getElementById('blue-buy').textContent = blueBuy
        document.getElementById('blue-avg').textContent = blueAvg
        document.getElementById('blue-sell').textContent = blueSell
        
    } catch (error) {
        console.error('Error al obtener las cotizaciones: ', error)
    }
}

obtenerCotizacion()