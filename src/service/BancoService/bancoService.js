class BancoService {
    cadastrarBanco(nomeBanco) {
        return fetch('http://127.0.0.1:5000/api/bancos/cadastrarBanco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nomeBanco })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    getAllBancos() {
        return fetch('http://127.0.0.1:5000/api/bancos/')
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}

export { BancoService }