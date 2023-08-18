class ExchangeService {
    getValorDolarReal() {
        return fetch('https://v6.exchangerate-api.com/v6/39ab658f2f0563f6ad8dbb41/latest/USD')
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}

export { ExchangeService }