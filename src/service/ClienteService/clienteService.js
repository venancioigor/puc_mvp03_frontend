class ClienteService {
    cadastrarCliente(nomeCliente, cpfCliente) {
        return fetch('http://127.0.0.1:5001/api/clientes/criarCliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nomeCliente, cpf: cpfCliente })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    getCliente(cpf) {
        return fetch(`http://127.0.0.1:5001/api/clientes/getCliente?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    getClienteSaldoGeral(cpf) {
        return fetch(`http://127.0.0.1:5001/api/clientes/getClienteSaldoGeral?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}

export { ClienteService }