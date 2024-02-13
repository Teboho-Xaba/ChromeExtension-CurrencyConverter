document.addEventListener('DOMContentLoaded', () =>{
    const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const convert = document.getElementById('convert')
const result = document.getElementById('result')

const api_key = "Jq5j2BtAuvE5aUo0kikjlw==Egiu4fo8GnW9buk1"
const api_url =  "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener("click", () =>{
    const amountTotal = amount.value
    const currencyTotal = currency.value
    const url = api_url + currencyTotal

    fetch(url, {
        headers: {
            'X-API-KEY': api_key
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate
        const resultPrice = amountTotal * rate
        result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(2)} USD`
    })
    .catch(error => {
        console.error('Request failed', error)
        result.innerHTML = "An error has occured"
    })
})
})
