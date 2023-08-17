class PorquinhoService {

    cadastrarPorquinho(cpfCliente, obj, sd) {
        return fetch('http://127.0.0.1:5000/api/porquinhos/criarPorquinho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cpf: cpfCliente, objetivo: obj, saldo: sd })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    transferirValorEntrePorquinho(idOrigem, idDestino, cpfCliente, valorOrigem) {
        return fetch('http://127.0.0.1:5000/api/porquinhos/porquinho/transferirValorEntrePorquinho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_origem: idOrigem, id_destino: idDestino, cpf: cpfCliente, valor_origem: valorOrigem })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    getAllPorquinhos(cpf) {
        return fetch(`http://127.0.0.1:5000/api/porquinhos/getAllPorquinhos?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }
    getSaldoTotalPorquinhos(cpf) {
        return fetch(`http://127.0.0.1:5000/api/porquinhos/getSaldoTotalPorquinhos?cpf=${cpf}`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    deletarPorquinho(cpfCliente, idPorquinho) {
        return fetch(`http://127.0.0.1:5000/api/porquinhos/deletarPorquinho?id_porquinho=${idPorquinho}&cpf=${cpfCliente}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cpf: cpfCliente, id_porquinho: idPorquinho })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
}

export { PorquinhoService }